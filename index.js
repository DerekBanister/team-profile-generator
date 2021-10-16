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
const fs = require("fs");

let managerArr = [];
let engineerArr = [];
let internArr = [];
let employeeArray = {manager, engineer, intern};

function promptUser() {

    return inquirer
    .prompt([
        {
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: ["Manager", "Engineer", "Intern"],
            default: "Manager"
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

//intern isnt returning the prompt if selected. nvm figured it out
//need to create constructors for each role
}
function init () {
    promptUser()
    .then(employeeArray => {
        console.log(employeeArray)
        const markup = `
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Document</title>
</head>
<body>
<div class="person">
<div class="jumbotron text-center jumbotron-fluid">
    <h1>Team Profile Generator!</h1>
</div>
<div class="card">

<div class="card-body"></div>
<hr>
</div>
</body>
</html>
`;

            fs.writeFile("index.html", (markup), (err) => 
            err ? console.error(err) : console.log("Your team has been assembled!"))
    })
}

init();