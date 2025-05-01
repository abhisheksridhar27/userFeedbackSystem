CREATE DATABASE feedback_db;

\c feedback_db;

CREATE TABLE feedback (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  category VARCHAR(50),
  text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
