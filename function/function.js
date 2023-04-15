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
  console.log(`Connected to the database.`)
);


function newEmployee(answers) {
    return db.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);',[answers.FirstName, answers.LastName, answers.role, answers.manager]);
} 

function updateNewRole(answers) {
    return db.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [answers.title, answers.salary, answers.department_id]);
}

 function addNewRole(answers) {
    return db.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?)', [answers.title, answers.salary, answers.department_id]);
 }

function addNewDepartment(answers) {
    return db.promise().query('INSERT INTO department (name) VALUES (?)', [answers.name]);
}
module.exports = {newEmployee, updateNewRole, addNewRole, addNewDepartment};