const express = require('express');
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const { assignTask, updateTaskStatus } = require('../controllers/taskController');

const router = express.Router();

// Assign a task (admin-only)
router.post('/', protect, adminOnly, assignTask);

// Update task status (employees only)
router.put('/:id', protect, updateTaskStatus);

module.exports = router;