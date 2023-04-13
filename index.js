const express = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'ENTER DATABSE HERE'
  },
  console.log(`Connected to the movies_db database.`)
);


inquirer
.prompt([
{
    type: 'list',
    name: 'startpoint',
    message: 'What would you like to do?',
    choices: ['Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
}

])
.then((answers) => {
    const svg = new SVG();
    svg.setText(answers.character, answers.textColor);