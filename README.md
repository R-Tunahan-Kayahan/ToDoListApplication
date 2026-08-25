# TaskFlow

<p align="center">
  <strong>Modern Web-Based Task & Project Management Platform</strong>
</p>

<p align="center">
  Task management, project tracking, calendar planning, analytics and AI-assisted productivity features
  in a modular web application.
</p>

<p align="center">
  <a href="https://github.com/R-Tunahan-Kayahan/ToDoListApplication">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository">
  </a>
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Node--RED-Backend%20Flows-BF0000?style=for-the-badge&logo=nodered&logoColor=white" alt="Node-RED">
  <img src="https://img.shields.io/badge/JavaScript-Frontend-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
</p>

---

## 📌 Overview

**TaskFlow** is a modular web-based task and project management application designed to provide users with a centralized environment for organizing tasks, managing projects, planning deadlines and analyzing productivity.

The application separates frontend presentation and backend processing into distinct layers. The frontend is responsible for user interaction, dynamic page management and API communication, while backend operations are orchestrated through **Node-RED flows**.

TaskFlow combines:

- User authentication
- Google authentication
- Task management
- Project management
- Calendar-based planning
- Productivity analytics
- AI-assisted content generation
- Multi-language interface support
- Notification and feedback mechanisms
- REST-based API communication

The overall architecture is designed to remain modular so that individual application components can be developed and maintained independently.

---

## ✨ Key Features

### 🔐 Authentication & User Management

TaskFlow provides an authentication layer for managing application users.

Supported functionality includes:

- User registration
- User login
- Password-based authentication
- Google authentication
- Firebase Authentication integration
- Password reset
- New password creation
- User profile management
- User settings management
- Session/token-based authentication

Authentication-related operations are handled through backend API endpoints and environment-based configuration.

---

### 📋 Task Management

The task management module is the core component of TaskFlow.

Users can:

- Create tasks
- Update existing tasks
- Delete tasks
- Change task status
- Set task priorities
- Assign tasks to projects
- Track task completion
- Define task dates
- Monitor active and completed tasks
- View tasks through different application interfaces

Tasks can be accessed through the REST API and displayed dynamically on the frontend.

Example endpoint:

```http
GET /api/tasks
