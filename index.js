const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');
const console = require('console');
const employeeArray = [];

const addManager = () => {
    return inquirer.prompt ([
        { 
            type: 'input',
            name: 'name',
            message: 'Name of manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                    } else {
                    console.log ("Please try again!");
                    return false;
                }
            }
        
        },
        { 
            type: 'input',
            name: 'id',
            message: 'Enter manegers ID.',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ("Try Again!")
                    return false;
                    } else {
                    return true;
                }
            }
        
        }
    ])
    .then(managerInput => {
        const  {name, id} = managerInput; 
        const manager = new Manager (name, id);

        employeeArray.push(manager); 

        console.log(manager); 
    })
};

const addEmployee = () => {
    console.log()
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Name of employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                    } else {
                    console.log ("Try again!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Try again!")
                    return false; 
                    } else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Add new member?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, role, confirmAddEmployee } = employeeData; 
        let employee; 
        if (role === "Engineer") {
            employee = new Engineer (name, id);
            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id);
            console.log(employee);
        }
        employeeArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(employeeArray); 
            } else {
            return employeeArray;
        }
    })

};
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Created! Go to index.html")
        }
    })
}; 
addManager()
  .then(addEmployee)
  .then(employeeArray => {
    return generateHTML(employeeArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });