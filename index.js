const inquirer = require("inquirer");
const mysql = require("mysql2");

const { newEmployee, updateNewRole, addNewRole, addNewDepartment } = require("./function/function.js");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "employee_db",
  },
  console.log(`Connected to the database.`)
);

function prompt() {
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
      } else if (answers.startpoint === "View All Roles") {
        viewRoles();
      } else if (answers.startpoint === "View All Employees") {
        viewEmployees();
      } else if (answers.startpoint === "Add Role") {
        addRole();
      } else if (answers.startpoint === "View All Departments") {
        viewDepartments();
      } else if (answers.startpoint === "Add Department") {
        addDepartment();
      } else if (answers.startpoint === "Quit") {
        console.log("Goodbye, thanks for stopping bye!");
        process.exit();
      }
    });
}

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
      updateNewRole(answers).then(([res]) => {
        console.log("Role has been updated!");
        prompt();
      });
    });
}

function viewRoles() {
  db.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    prompt();
  });
}

function viewEmployees() {
  db.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    prompt();
  });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the role you would like to add?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for this role?",
      },
      {
        type: "input",
        name: "department_id",
        message: "What is the department ID for this role?",
      },
    ])
    .then((answers) => {
      addNewRole(answers).then(([res]) => {
        console.log("Role has been added!");
        prompt();
      });
    });
}

function viewDepartments() {
  db.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    prompt();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the department you would like to add?",
      },
    ])
    .then((answers) => {
      addNewDepartment(answers).then(([res]) => {
        console.log("Role has been added!");
        prompt();
      });
    });
}


prompt();
