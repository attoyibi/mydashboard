# Dashboard Management Application

## Overview
A simple web application designed to showcase front-end development skills, allowing users to manage items through a responsive dashboard interface. This application includes registration, login, and item management features.

## Project Features

- **Landing Page**: Hero and Feature Section.

  ***dekstop***
  ![image](https://github.com/user-attachments/assets/cfc309c4-64e3-4607-aaeb-4050c893423a)

  ***table***
  ![image](https://github.com/user-attachments/assets/22351684-4d4f-4747-b5d8-66da33fcff35)

  ***mobile***
  ![image](https://github.com/user-attachments/assets/b472432b-5c03-4148-9116-f33f62fb84c6)

- **User Interface**: Registration and login forms for users.
  - ![image](https://github.com/user-attachments/assets/c161729f-464f-4a23-a692-d6c9dd152291)
  
- **User Dashboard**: Displays a list of items with options to add or delete items.
  - ![image](https://github.com/user-attachments/assets/015a84d4-9bc2-4289-bd39-1e221a8a7f31)

- **Item Management**: Users can add and remove items from their dashboard.
  - ![image](https://github.com/user-attachments/assets/c1a7e8bf-fb9f-4ea8-92e1-2e573dc57f65)
  - ![image](https://github.com/user-attachments/assets/47af3a45-2bc2-4b1f-b4ba-9f0c5fde4133)

- **Responsive Design**: Fully responsive, optimized for mobile and desktop views.
  - ![image](https://github.com/user-attachments/assets/30f211c3-b61e-4503-bf06-574fec744e71)
  - ![image](https://github.com/user-attachments/assets/4419e8a7-e063-4797-8ca6-7962f77c04cc)

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

## Installation Back End

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

## Installation Front End

### Prerequisites

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

### Project Structure

This front-end project is located in the `mydashboard` directory.

### Installation

1. **Clone the Repository**

   Clone the repository to your local machine and navigate to the `frontend` directory:
   ```bash
   git clone https://github.com/attoyibi/mydashboard/tree/documentation
   cd mydashboard
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

### Available Scripts

In the project directory, you can run the following commands:

- `npm run dev`: Runs the Vite development server in the local environment.
- `npm run build`: Builds the project for production to the `dist` folder.
- `npm run preview`: Preview the production build locally.


### Troubleshooting

If you encounter issues with the development server, try clearing the cache:
```bash
npm run clean
```

Ensure you have the correct Node.js version (recommended: LTS version). If the server doesn’t start, check for errors in the terminal or browser console, and verify that all dependencies are installed.

Once setup is complete, visit [http://localhost:5173](http://localhost:5173) in your browser to see the front-end application running.
