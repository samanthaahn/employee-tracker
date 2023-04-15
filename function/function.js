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


function newEmployee(answers) {
    return db.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);',[answers.FirstName, answers.LastName, answers.role, answers.manager]);
} 

function updateRole(answers) {
    return db.promise().query('UPDATE employee SET role_id =? WHERE first_name =? AND last_name =?;', [answers.role, answers.FirstName, answers.LastName]);
}

module.exports = {newEmployee, updateRole};