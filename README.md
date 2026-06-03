# Task Manager Application



A full-stack Task Manager application built as part of a Backend Developer Internship Assignment. The project demonstrates secure authentication, role-based access control, CRUD operations, input validation, and a React frontend integrated with a Node.js backend.



---



## Features



### Authentication & Authorization



- User Registration

- User Login

- Password Hashing using bcryptjs

- JWT Authentication

- Protected Routes

- Role-Based Access Control (User/Admin)



### Task Management



- Create Task

- View Tasks

- Update Task

- Delete Task



### Validation



- Email Validation

- Password Validation

- Required Field Validation using express-validator



### Frontend



- React + Vite

- Login Page

- Registration Page

- Dashboard

- Task Management Interface

- Logout Functionality



### Backend



- RESTful APIs

- Express.js

- MongoDB Atlas

- Mongoose ODM

- JWT Authentication

- Error Handling Middleware



---



## Tech Stack



### Frontend



- React.js

- Vite

- React Router DOM

- Axios

- CSS



### Backend



- Node.js

- Express.js

- MongoDB Atlas

- Mongoose

- JWT

- bcryptjs

- express-validator

- dotenv



---



## Project Structure



```text

backend-task-manager/

│

├── Controllers/

│   ├── authControllers.js

│   ├── taskController.js

│   └── adminController.js

│

├── middleware/

│   ├── authMiddleware.js

│   └── roleMiddleware.js

│

├── models/

│   ├── user.js

│   └── task.js

│

├── routes/

│   ├── authRoutes.js

│   └── taskRoutes.js

│

├── validate/

│   ├── authValidate.js

│   └── validates.js

│

├── swagger/

│   └── swagger.js

│

├── frontend/

│

├── config/

│   └── db.js

│

├── .env

├── .gitignore

├── package.json

└── server.js

```



---



## Installation & Setup



### Clone Repository



```bash

git clone https://github.com/uttkarsh710/task-manager-assignment.git

cd task-manager-assignment

```



---



## Backend Setup



Install dependencies:



```bash

npm install

```



Create a `.env` file:



```env

PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY

```



Start backend server:



```bash

npm run dev

```



Backend runs on:



```text

http://localhost:5000

```



---



## Frontend Setup



Navigate to frontend folder:



```bash

cd frontend

npm install

npm run dev

```



Frontend runs on:



```text

http://localhost:5173

```



---



## API Endpoints



### Authentication



#### Register User



```http

POST /api/v1/auth/register

```



#### Login User



```http

POST /api/v1/auth/login

```



---



### Tasks



#### Get All Tasks



```http

GET /api/v1/tasks

```



#### Create Task



```http

POST /api/v1/tasks

```



#### Update Task



```http

PUT /api/v1/tasks/:id

```



#### Delete Task



```http

DELETE /api/v1/tasks/:id

```



---



## Security Features



- Password Hashing (bcryptjs)

- JWT Authentication

- Protected Routes

- Role-Based Authorization

- Input Validation

- Environment Variables for Secrets



---



## Scalability Considerations



This application follows a modular architecture, making it easy to scale by:



- Separating controllers, routes, models, and middleware

- Adding new modules without affecting existing functionality

- Integrating Redis caching for frequently accessed data

- Deploying backend services independently

- Using load balancing for high traffic scenarios

- Migrating to a microservices architecture if needed



---



## Future Improvements



- Task Status Updates

- Search & Filtering

- Pagination

- User Profile Management

- Docker Deployment

- Redis Caching

- CI/CD Pipeline



---



## Author



**Uttkarsh Tiwari**



B.Tech CSE Graduate



GitHub: https://github.com/uttkarsh710



---



## Assignment Requirements Covered



- Authentication APIs

- JWT Authorization

- Role-Based Access Control

- CRUD Operations

- Input Validation

- MongoDB Database Design

- React Frontend Integration

- API Documentation

- Scalability Notes

- GitHub Repository