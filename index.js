// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


// First setup all packages/dependencies needed
//create empty array for each role, push info to it
//prompt user with series of questions
//list = manager, employee, intern
//Need name, id number, email from each role
//for engineer, github
//for intern school

const inquirer = require('inquirer');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

let manager = [];
let engineer = [];
let intern = [];
let employeeArray = {manager, engineer, intern};

function PromptUser() {

    return inquirer
    .prompt([
        {
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "text",
            name: "employee",
            message: "What is the employee's name?"
        },
        {
            type: "text",
            name: "employee",
            message: "What is the employee's name?"
        },
        {
        type: "text",
        name: "id",
        message: "What is the employee's email?"
        }])
    .then(({employee, id, email, role}) => {
            if (role === "Manager") {
                return inquirer
                .prompt ([{
                    type: "text",
                    name: "office",
                    message: "What is the manager's office number?"
                },
                {
                    type: "confirm",
                    name: "nextEntry",
                    message: "Would you like to add another employee to your team?",
                    default: false
                }
                ])
            }
    })

//next to for roles, if statements? .then if role === employee? Push answers to array

}