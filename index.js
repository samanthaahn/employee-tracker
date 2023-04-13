const inquirer = require('inquirer');

const addEmployee = require('./function/function.js');

inquirer
.prompt([
{
    type: 'list',
    name: 'startpoint',
    message: 'What would you like to do?',
    choices: ['Add Employee', 'Update Employee Role', 'View All Roles','View All Employees', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
}

])
.then((answers) => {
  if(answers.startpoint === 'Add Employee'){
    addEmployee();
  }
});