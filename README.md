<div align="center">

# Management System with MERN Stack

</div>

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Prerequisites](#prerequisites)
5. [Backend Setup](#backend-setup)
6. [Frontend Setup](#frontend-setup)
7. [Running the Application](#running-the-application)
8. [Usage](#usage)
9. [Additional Information](#additional-information)

## Technologies Used
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB + Mongoose
  - JWT for authentication
  - Socket.io for real-time updates
  - Nodemailer for email notifications
  - bcrypt.js for password hashing

- **Frontend**:
  - React.js
  - Axios for HTTP requests
  - Socket.io-client for real-time updates
  - React Router DOM for navigation

## Features
- User Authentication: Registration and login for users.
- Role-Based Access Control: Admins can assign tasks; employees can update the status of tasks.
- Real-Time Task Updates: Task status is updated in real time using Socket.io.
- Email Notifications: Email notifications are sent to users when a new task is assigned.
- Dashboard: Separate dashboard views for admins and employees.

## Prerequisites
Make sure you have the following installed on your machine:

- Node.js (v12 or higher)
- npm or yarn
- MongoDB (running locally or in the cloud, e.g., MongoDB Atlas)

## Frontend Setup

1. Navigate to the frontend folder:

bash
Copy code
cd management-system/frontend

2. Install dependencies:

bash
Copy code
npm install

3. Configure Socket.io and Axios: Make sure the axios base URL in your React app points to your backend server (usually http://localhost:5000). This can be done in an Axios configuration file.

4. Start the frontend development server:

bash
Copy code
npm start

The frontend app will be running at http://localhost:3000.


## Backend Setup

1. Clone the repository and navigate to the backend folder:

bash
Copy code
git clone https://github.com/your-repo/task-management-system.git
cd management-system/backend

2. Install dependencies:

bash
npm install

3. Set up environment variables: Create a .env file in the backend directory and configure the following:

makefile
MONGO_URI=mongodb://localhost:27017/your-db-name
JWT_SECRET=your-jwt-secret
NODEMAILER_USER=your-email@gmail.com
NODEMAILER_PASS=your-email-password

4. Run MongoDB: Ensure MongoDB is running locally or configure it to use MongoDB Atlas in your .env file.

5. Start the backend server:

bash
npm run dev

The backend server will be running at http://localhost:5000.

## Running the Application
To run the entire project, make sure both backend and frontend servers are running:

1. Backend:

bash
cd backend
npm run dev

2. Frontend:

bash
cd frontend
npm start
Now, open your browser and navigate to http://localhost:3000 to interact with the app.

## Usage

1. User Registration:

- Upon opening the app, you’ll be presented with the Registration page where you can create a new account.
Choose the role as either Admin or Employee when registering.

2. Login:

- If you already have an account, click the "Already Registered?" link to go to the login page and sign in.

3. Admin Dashboard:

- After logging in as an Admin, you will be able to view, create, and assign tasks to employees.
Admins can also view the status of all tasks and manage users.

4. Employee Dashboard:

- After logging in as an Employee, you can see your assigned tasks and update the status (e.g., "In Progress" or "Completed").

5. Real-Time Updates:

- When a task status is updated, both admin and employee dashboards will reflect the changes in real time.

6. Email Notifications:

- Whenever a task is assigned to an employee, they will receive an email notification.

## Project Structure

<div align="left">

/backend
<div align="left">
  ├── /config        # MongoDB and other configurations
  ├── /controllers   # Logic for handling requests (auth, tasks, etc.)
  ├── /middleware    # Middleware for authentication and error handling
  ├── /models        # Mongoose models for User, Task, etc.
  ├── /routes        # API routes for authentication and task management
  └── server.js      # Main server file
</div>
/frontend
<div align="left">
  ├── /components    # React components for login, register, task management
  ├── /context       # Context for managing authentication state
  ├── /pages         # Admin and employee pages
  ├── /utils         # Utility functions (e.g., auth token handling)
  └── App.js         # Main application file
</div>

</div>

## Additional Information

## Nodemailer Configuration
- Make sure you enable "Less secure app access" in your Google account if you're using Gmail for sending emails, or configure OAuth2 for higher security.

## Socket.io Integration
- Both the frontend and backend are connected via Socket.io for real-time task updates. The server broadcasts task status changes, and the clients listen for updates to reflect them in real time.


## Contributing
- Feel free to fork this project and create pull requests to add new features or improve the existing code. If you encounter any issues or bugs, please report them in the issues section.

## License
This project is licensed under the MIT License.

