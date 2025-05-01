# User Feedback System

A full-stack feedback collection app where users can submit feedback and view submitted feedback with filtering and sorting options.

## Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: React, Axios, CSS
- **Database**: PostgreSQL

---

##  How to Run Locally

###  Backend Setup
1. Navigate to the `backend/` directory.
2. Install dependencies:
   ```bash
   npm install
3. Start the backend server:
    ```bash
    npm start

###  Frontend Setup
1. Navigate to the `frontend/` directory.
2. Install dependencies:
   ```bash
   npm install
3. Start the frontend server:
    ```bash
    npm start

###  Database Setup
1. Navigate to the `database/` directory.
2. Run psql and Connect to PostgreSQL:
    ```bash
   psql -U postgres
3. Once inside psql, create the DB:
    ```bash
   CREATE DATABASE feedback_db;
4. Now, from your terminal outside psql, Run the SQL Script File:
    ```bash
    psql -U postgres -d feedback_db -f schema.sql