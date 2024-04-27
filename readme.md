# FullStack Development Demo

## About

This repository contains the code for the backend application for the [Frontend Repository]()

Backend Application is a RESTful API developed using Node.js and Express.js. It uses MongoDB as the database and Mongoose as the ODM (Object Data Modeling).


## Sessions

- **Session - I:**
    - Introduction to FullStack Development
    - Components of FullStack Development
    - Tools and Technologies
    - Setting up the Environment
        - VS Code IDE Installation
        - Node.js Installation
        - Git Installation
        - GitHub Account Creation
        - GitHub Repository Creation 
        - Extensions - VSCode
            - Code Runner
    - Setting up the Backend
        - Node.js: To create a server
        - Express.js: To create a Rest API
        - Nodemon: Auto Restart Server if any changes in the code
        - Postman: Testing API
        - Database - MongoDB - Atlas Cloud
        - Mongoose: MongoDB Object Data Modeling
        - MongoDB Compass: To visualize the data
    - API Development 
        - User Endpoints
            - Create User
            - Get Users
            - Get ser by ID
            - Update User
            - Delete User
            - Login User
            - Logout User

- **Session - II:**
    - Problem Statement
    - Completion of the Backend w.r.t to the problem statement
    - Setting up the Frontend
        - React.js: To create a UI
        - Vite: To create a React App
        - React Router Dom: To create a Routing
        - Axios: To make HTTP Requests
        - Bootstrap: To style the UI
        - React Icons / Fontawesome / Material Icons: To use Icons
        - React Toastify: To show Toast Messages (Alerts)
    
- **Session - III:**
    - Completion of the Frontend w.r.t to the problem statement
    - Integration of Backend and Frontend
    - Deployment
        - Backend Deployment - Render
        - Frontend Deployment - Netlify
    - Conclusion

## Setup

- Run `npm init` to create a package.json file.
- Run `npm install` to install the dependencies.

## Application

Job Portal Application

### Features

- [x] User Registration
- [x] User Login

- [x] Admin Dashboard

  - [x] Add a company
  - [x] Update a company
  - [x] Delete a company
  - [x] Get all companies
  - [x] Get company by ID

  - [x] Add a job
  - [x] Update a job
  - [x] Delete a job
  - [x] Get all jobs
  - [x] Get job by ID

- [x] User Dashboard

  - [x] View all jobs
  - [x] View a job by ID
  - [x] Apply for a job
  - [x] View applied jobs

- [x] User Profile

  - [x] Get user profile
  - [x] Update user profile
  - [x] Delete user profile

- [x] Logout

## API Endpoints

### Users

#### Unauthenticated user

- `POST /api/users` - Create a new user
- `POST /api/users/login` - Login user

#### Authenticated user

- `POST /api/users/logout` - Logout user
- `GET /api/users/me` - Get current user
- `PUT /api/users/me` - Update current user
- `DELETE /api/users/me` - Delete current user

#### Authenticated - Admin:

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID
