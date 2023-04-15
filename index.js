const inquirer = require("inquirer");

const {newEmployee, updateRole} = require("./function/function.js");

function prompt(){
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
    } else if (answers.startpoint === "Update Employee Role") {
      updateRole();
  }
})
};

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
        prompt();
      });
    });
}

function updateRole() {
  inquirer
   .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the role you would like to update?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the new salary for this role?",
      },
      {
        type: "input",
        name: "department_id",
        message: "What is the department ID for this role?",
      },
    ])
   .then((answers) => {
      updateRole(answers).then(([res]) => {
        console.log("Role has been updated!");
        prompt();
      });
    });
}


prompt();
