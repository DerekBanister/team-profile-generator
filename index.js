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
const fs = require('fs');
const generateHtml = require ('./lib/generateHtml')

let managerArr = [];
let engineerArr = [];
let internArr = [];
let employeeArray = {managerArr, engineerArr, internArr};

function promptUser() {

    return inquirer
    .prompt([
        {
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            type: "text",
            name: "employee",
            message: "What is the employee's name?"
        },
        {
            type: "text",
            name: "id",
            message: "What is the employee's ID number?"
        },
            {
            type: "text",
            name: "email",
            message: "What is the employee's email?"
            }])
        //next to for roles, if statements? .then if role === employee? Push answers to array
    .then(({employee, id, email, role}) => {
            if (role === "Manager") {
                return inquirer
                .prompt ([{
                    type: "text",
                    name: "officeNum",
                    message: "What is your office number?"
                },
                {
                    type: "confirm",
                    name: "nextEntry",
                    message: "Would you like to add another employee to your team?",
                    default: false
                }])
                .then(({officeNum, nextEntry}) => {
                         managerArr.push(new manager(employee, id, email, officeNum))
                         console.log(managerArr);
                        //prompts working if nextEntry, managerArr having issues. Havent created manager constructor
                    if (nextEntry){
                        return promptUser();
                    }
                })
            } else if (role === "Engineer") {
                return inquirer
                    .prompt([{
                        type: "text",
                        name: "github",
                        message: "What is your Engineer's Github username?"
                    },
                    {
                        type: "confirm",
                        name: "nextEntry",
                        message: "Would you like to add another employee to your team?",
                        default: false
                    }])
                    .then(({github, nextEntry}) => {
                        engineerArr.push(new engineer(employee, id, email, github))
                        console.log(engineerArr);
                        if (nextEntry){
                            return promptUser();
                        }
                    })
                
            } else if (role === "Intern"){
                return inquirer
                    .prompt([{
                        type: "text",
                        name: "school",
                        message: "What is your intern's school?"
                    },
                    {
                        type: "confirm",
                        name: "nextEntry",
                        message: "Would you like to add another employee to your team?",
                        default: false
                    }
                ])
                    .then(({school, nextEntry}) => {
                        internArr.push(new intern(employee, id, email, school))
                        console.log(internArr);
                        if (nextEntry){
                            return promptUser();
                        }
                    })
            }
    })
}

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve(console.log("Your team has been assembled in the index.html file"))
        })
    })
}
//runs prompts, generates html, then calls writeFile to append to index.html page
promptUser()
.then (team => {
    return generateHtml(employeeArray)
})
.then(pageHTML => {
    return writeFile(pageHTML)
})
