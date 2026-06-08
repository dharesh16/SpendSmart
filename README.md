# SpendSmart
Track smart, spend wise

## Project Details

| Field | Details |
|---|---|
| Project Name | SpendSmart |
| Tagline | Track smart, spend wise |
| Frontend | React.js + Bootstrap |
| Backend | Java + Spring Boot |
| Database | MySQL |
| Primary Language | Java |
| Deadline | June 30 |

## Day 1 - Project Title

Title: SpendSmart

A web-based expense tracking application that helps users track daily expenses, categorize spending, and visualize habits through interactive charts.

## Day 2 - Problem Statement

In today's fast-paced life, most students and working individuals do not keep track of their daily expenses. They spend money on food, travel, bills, and other needs without realizing how much they are spending in each category. By the end of the month, they are left with no clear idea of where their money went or why their savings are low. SpendSmart solves this by allowing users to add daily expenses, organize them by category, and view interactive charts that clearly show their spending pattern helping them make smarter financial decisions every day.

## Day 3 - Project Objectives

1. To allow users to register and login securely using JWT authentication
2. To enable users to add, view and delete their daily expenses
3. To categorize expenses under Food, Travel, Bills and Others
4. To display total income, total expense and remaining balance on a dashboard
5. To show a pie chart and bar chart for visual spending analysis
6. To filter expenses by month and category
7. To store all data securely in a MySQL database
8. To build a responsive web interface using React.js and Bootstrap

## Day 4 - Module List

### Users
- Register with name, email and password
- Login with email and password
- Secure authentication using JWT token

### Expense Management
- Add new expense with amount, category, date and description
- View all expenses in a table
- Delete an expense

### Category Management
- 4 fixed categories - Food, Travel, Bills, Others
- Each expense is linked to one category

### Dashboard
- Show total income
- Show total expense
- Show remaining balance
- Display all recent expenses

### Charts and Analytics
- Pie chart showing spending by category
- Bar chart showing monthly expense comparison

### Filter and Search
- Filter expenses by month
- Filter expenses by category

## Day 5 - Use Case Diagram

### Actor
- User (the person using SpendSmart)

### Use Cases
1. Register
2. Login
3. Add Expense
4. View Expenses
5. Delete Expense
6. View Dashboard
7. View Charts
8. Filter Expenses
9. Logout

### Description
The User is the only actor in SpendSmart.
After registering and logging in, the user can
add, view and delete expenses, view the dashboard
summary, see spending charts and filter expenses
by category or month.

## Day 6 - Table List

### Table 1 - USERS
Stores all registered users
- id (INT) - Primary Key
- name (VARCHAR 100) - Full name
- email (VARCHAR 100) - Login email
- password (VARCHAR 255) - Encrypted password

### Table 2 - CATEGORIES
Stores expense categories
- id (INT) - Primary Key
- name (VARCHAR 50) - Food, Travel, Bills, Others

### Table 3 - EXPENSES
Stores all expense entries
- id (INT) - Primary Key
- amount (DECIMAL 10,2) - Expense amount
- description (VARCHAR 255) - Short note
- date (DATE) - Date of expense
- user_id (INT) - Foreign Key linking to USERS
- category_id (INT) - Foreign Key linking to CATEGORIES

## Day 7 - ER Diagram

### Entities and Relationships

USERS ||--o{ EXPENSES : has
- One User can have many Expenses
- Each Expense belongs to only one User

CATEGORIES ||--o{ EXPENSES : contains
- One Category can have many Expenses
- Each Expense belongs to only one Category

### Relationships Summary
- USERS to EXPENSES = One to Many
- CATEGORIES to EXPENSES = One to Many
- user_id in EXPENSES links to id in USERS
- category_id in EXPENSES links to id in CATEGORIES

## Day 8 - SQL Schema

### Database Name: spendsmart

CREATE DATABASE spendsmart;
USE spendsmart;

CREATE TABLE users (
  id        INT AUTO_INCREMENT PRIMARY KEY,
  name      VARCHAR(100) NOT NULL,
  email     VARCHAR(100) NOT NULL UNIQUE,
  password  VARCHAR(255) NOT NULL
);

CREATE TABLE categories (
  id    INT AUTO_INCREMENT PRIMARY KEY,
  name  VARCHAR(50) NOT NULL
);

INSERT INTO categories (name) VALUES
  ('Food'),
  ('Travel'),
  ('Bills'),
  ('Others');

CREATE TABLE expenses (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  amount       DECIMAL(10,2) NOT NULL,
  description  VARCHAR(255),
  date         DATE NOT NULL,
  user_id      INT NOT NULL,
  category_id  INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);