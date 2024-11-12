# Dashboard Management Application

A simple web application built to showcase front-end development skills, allowing users to manage items through a responsive dashboard interface. This app includes registration, login, and item management features.

## Project Overview
This application includes the following features:
- **User Interface**: Includes registration and login forms for users.
- **User Dashboard**: Displays a list of items with options to add or delete items.
- **Item Management**: Users can add and remove items from their dashboard.
- **Responsive Design**: Fully responsive and optimized for both mobile and desktop views.

## Built With
- **Frontend**: HTML, CSS, JavaScript, React.js
- **Styling**: Tailwind CSS 
- **Database**: MySQL
- **TypeScript**: Type safety in frontend development and backend development
- **Bundling**: Vite

## Getting Started

### Prerequisites
- Node.js and npm installed
- MySQL database set up
- Git for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/attoyibi/mydashboard.git
   cd mydashboard
2. **Install Dependencies**
Before you can run the application, you need to install the required dependencies. Ensure that Node.js and npm are installed. You can check this by running:
   ```bash
   Copy code
   node -v
   npm -v

   If you don’t have Node.js installed, you can download it from the Node.js website.

   After making sure Node.js and npm are installed, run the following command to install all the necessary dependencies:

   ```bash
   Copy code
   npm install
3. **Set Up Environment Variables**
You need to configure your MySQL database connection details. In the project’s root directory, create a .env file with the following content:

plaintext
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=dashboard
DB_PORT=3306
4. Set Up the Database
Make sure MySQL is installed and running on your system. You can download MySQL from the official website.

Once MySQL is running, you will need to create the required database and tables.

Open MySQL Workbench or your preferred MySQL client and execute the SQL commands from the server/db folder. The folder contains SQL scripts to set up the user and item tables:
Navigate to the server/db folder.
Run the SQL file to create the tables.
Here is the SQL structure that will be used:

sql
Copy code
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
5. Start the Development Server
Now that the dependencies are installed and the database is set up, you can start the server.

Run this command to launch the development server:

bash
Copy code
npm start
This will start the application on http://localhost:3000. You can visit this URL in your browser to access the web application.

6. Access the Application
Visit http://localhost:3000 in your browser.
You will see a registration and login form. After logging in, you’ll be redirected to your dashboard.
On the dashboard, you can manage your items by adding, editing, or deleting them.