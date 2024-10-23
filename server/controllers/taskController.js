const Task = require('../models/Task');
const User = require('../models/User');
const nodemailer = require('nodemailer');

// Assign a task (admin-only)
const assignTask = async (req, res) => {
    const { title, description, assignedTo } = req.body;
    const task = new Task({
        title,
        description,
        assignedTo,
        assignedBy: req.user._id,
    });
    await task.save();

    const user = await User.findById(assignedTo);
    sendTaskAssignmentEmail(user.email, task);

    res.status(201).json(task);
};

// Update task status (employees only)
const updateTaskStatus = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task || task.assignedTo.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Not authorized' });
    }
    task.status = req.body.status;
    await task.save();

    // Notify via Socket.io
    req.io.emit('taskUpdated', task);

    res.json(task);
};

// Nodemailer for email notifications
const sendTaskAssignmentEmail = (recipientEmail, task) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: recipientEmail,
        subject: 'New Task Assigned',
        text: `You have been assigned a new task: ${task.title}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.log('Error sending email: ', error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = { assignTask, updateTaskStatus };