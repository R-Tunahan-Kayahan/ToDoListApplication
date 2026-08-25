# TaskFlow

<p align="center">
  <img src="www/images/list.ico" width="80" alt="TaskFlow">
</p>

<h1 align="center">TaskFlow</h1>

<p align="center">
  Modular Web-Based Task and Project Management Platform
</p>

<p align="center">
  <a href="https://github.com/R-Tunahan-Kayahan/ToDoListApplication">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github" alt="GitHub">
  </a>
  <img src="https://img.shields.io/badge/Node.js-Runtime-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Node--RED-Backend-BF0000?style=flat-square&logo=nodered&logoColor=white" alt="Node-RED">
  <img src="https://img.shields.io/badge/JavaScript-Frontend-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white" alt="Bootstrap">
</p>

---

## Table of Contents

- [Project Overview](#project-overview)
- [Project Objectives](#project-objectives)
- [Core Features](#core-features)
- [System Architecture](#system-architecture)
- [Application Architecture](#application-architecture)
- [Node-RED Architecture](#node-red-architecture)
- [Frontend Architecture](#frontend-architecture)
- [Template Architecture](#template-architecture)
- [Authentication Architecture](#authentication-architecture)
- [JWT Architecture](#jwt-architecture)
- [Firebase and Google Authentication](#firebase-and-google-authentication)
- [AI Architecture](#ai-architecture)
- [API Architecture](#api-architecture)
- [Data Architecture](#data-architecture)
- [Environment Configuration](#environment-configuration)
- [Project Structure](#project-structure)
- [Application Modules](#application-modules)
- [Application Flow](#application-flow)
- [Task Management Flow](#task-management-flow)
- [Project Management Flow](#project-management-flow)
- [Calendar Architecture](#calendar-architecture)
- [Analytics Architecture](#analytics-architecture)
- [SurveyJS Architecture](#surveyjs-architecture)
- [Mustache Architecture](#mustache-architecture)
- [Security](#security)
- [Error Handling](#error-handling)
- [Development Workflow](#development-workflow)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Git Workflow](#git-workflow)
- [Future Improvements](#future-improvements)
- [Technologies](#technologies)
- [Project Links](#project-links)
- [Author](#author)

---

# Project Overview

**TaskFlow** is a modular web-based task and project management application developed to provide a centralized environment for managing personal tasks, projects, deadlines and productivity data.

The application combines:

- task management,
- project management,
- calendar management,
- analytics,
- authentication,
- user settings,
- AI-assisted content,
- multi-language support,
- dynamic forms,
- template-based rendering,
- REST API communication

within a single application architecture.

The system is designed around a separation between the **frontend interface**, **backend request processing**, **authentication services**, **external APIs** and **data access layer**.

The frontend is implemented using JavaScript-based modules and HTML/CSS resources under the `www/` directory.

Backend operations are orchestrated through **Node-RED** and its flow-based programming model.

The main Node-RED configuration is maintained through:

```text
flows.json
