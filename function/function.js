const inquirer = require('inquirer');

// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'employee_db'
  },
  console.log(`Connected to the movies_db database.`)
);


function addEmployee() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'FirstName',
        message: 'What is the employees name?',
    },
    {
        type: 'input',
        name: 'LastName',
        message: 'What is the employees last name?',
    },
    {
        type: 'input',
        name:'role',
        message: 'What is the ID of the employees role?',
    },
    {
        type: 'input',
        name:'manager',
        message: 'What is the ID of the employees manager?',
    }
    
    ])
    .then((answers) => {
    db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);',[answers.FirstName, answers.LastName, answers.role, answers.manager], (err, res) => {
        if (err) throw err; 
        console.log('Added new employee!');
    });
    });
}

module.exports = addEmployee;