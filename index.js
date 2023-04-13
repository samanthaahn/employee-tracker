const inquirer = require("inquirer");

const newEmployee = require("./function/function.js");

inquirer
  .prompt([
    {
      type: "list",
      name: "startpoint",
      message: "What would you like to do?",
      choices: [
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "View All Employees",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit",
      ],
    },
  ])
  .then((answers) => {
    if (answers.startpoint === "Add Employee") {
      addEmployee();
    }
  });

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "FirstName",
        message: "What is the employees name?",
      },
      {
        type: "input",
        name: "LastName",
        message: "What is the employees last name?",
      },
      {
        type: "input",
        name: "role",
        message: "What is the ID of the employees role?",
      },
      {
        type: "input",
        name: "manager",
        message: "What is the ID of the employees manager?",
      },
    ])
    .then((answers) => {
      newEmployee(answers).then(([res]) => {
        console.log("Added new employee!");
      });
    });
}
