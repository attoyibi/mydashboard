```markdown
# Dashboard Management Application

## Overview
A simple web application designed to showcase front-end development skills, allowing users to manage items through a responsive dashboard interface. This application includes registration, login, and item management features.

## Project Features

- **User Interface**: Registration and login forms for users.
- **User Dashboard**: Displays a list of items with options to add or delete items.
- **Item Management**: Users can add and remove items from their dashboard.
- **Responsive Design**: Fully responsive, optimized for mobile and desktop views.

## Built With

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Styling**: Tailwind CSS
- **Database**: MySQL
- **TypeScript**: Provides type safety in both frontend and backend development
- **Bundling**: Vite

## Getting Started

### Prerequisites

- Node.js and npm installed
- MySQL database set up
- Git for version control

### Installation Back End

1. **Clone the Repository**
   ```bash
   git clone https://github.com/attoyibi/mydashboard.git
   cd mydashboard
   ```

2. **Install Dependencies**
   Ensure that Node.js and npm are installed. You can check this by running:
   ```bash
   node -v
   npm -v
   ```

   If Node.js is not installed, download it from the [Node.js website](https://nodejs.org/).

   After confirming Node.js and npm are installed, run the following command to install necessary dependencies:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Configure your MySQL database connection details. Create a `.env` file in the project’s root directory with the following content:
   ```plaintext
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=root
   DB_NAME=dashboard
   DB_PORT=3306
   ```

4. **Set Up the Database**
   Ensure MySQL is installed and running on your system. If not, download it from the [MySQL official website](https://www.mysql.com/).

   To set up the required database and tables, use MySQL Workbench or another preferred MySQL client to execute the SQL commands found in the `server/db` folder. This folder includes SQL scripts for setting up user and item tables:

   - Navigate to the `server/db` folder.
   - Execute the SQL file to create the tables.

   Example SQL Structure:
   ```sql
   CREATE TABLE user (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );

   CREATE TABLE item (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      name VARCHAR(100) NOT NULL,
      description TEXT,
      quantity INT DEFAULT 0,
      price DECIMAL(10, 2) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
   );
   ```

5. **Start the Development Server**
   With dependencies installed and the database set up, start the server with:
   ```bash
   npm start
   ```

   This will start the application on `http://localhost:3000`. Visit this URL in your browser to access the web application.

6. **Access the Application**
   Open `http://localhost:3000` in your browser. Here, you will find the registration and login form. After logging in, you will be redirected to your dashboard where you can manage your items by adding, editing, or deleting them.

### Installation Front End

```markdown
# Front-End Setup Guide

This guide will help you set up the front-end of the project, built with React and Vite.

## Prerequisites

Before starting the installation, please ensure the following are installed:

- **Node.js**: Verify installation by running:
  ```bash
  node -v
  ```

- **npm**: Verify installation by running:
  ```bash
  npm -v
  ```

If Node.js or npm are not installed, download and install them from the [official Node.js website](https://nodejs.org/).

## Project Structure

This front-end project is located in the `frontend` directory.

## Installation

1. **Clone the Repository**

   Clone the repository to your local machine and navigate to the `frontend` directory:
   ```bash
   git clone https://github.com/your-username/project-name.git
   cd project-name/frontend
   ```

2. **Install Dependencies**

   Install all the required dependencies for the front-end using npm:
   ```bash
   npm install
   ```

3. **Start the Development Server**

   Once the dependencies are installed, start the development server using Vite:
   ```bash
   npm run dev
   ```

   The development server will start and be accessible at [http://localhost:5173](http://localhost:5173) by default.

## Available Scripts

In the project directory, you can run the following commands:

- `npm run dev`: Runs the Vite development server in the local environment.
- `npm run build`: Builds the project for production to the `dist` folder.
- `npm run preview`: Preview the production build locally.

## Folder Structure

Here is a quick overview of the folder structure:

```plaintext
frontend/
├── src/
│   ├── assets/     # Static assets like images, fonts
│   ├── components/ # Reusable UI components
│   ├── pages/      # Different pages in the app (e.g., Login, Dashboard)
│   ├── services/   # API calls or utility functions
│   └── App.tsx     # Main application entry point
├── public/         # Public assets served directly (index.html)
├── .env            # Environment variables for your app (e.g., API URLs)
├── package.json    # Project dependencies and scripts
└── vite.config.ts  # Vite configuration file
```

## Troubleshooting

If you encounter issues with the development server, try clearing the cache:
```bash
npm run clean
```

Ensure you have the correct Node.js version (recommended: LTS version). If the server doesn’t start, check for errors in the terminal or browser console, and verify that all dependencies are installed.

Once setup is complete, visit [http://localhost:5173](http://localhost:5173) in your browser to see the front-end application running.
```