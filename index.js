const fs = require("fs");
const inquire = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHtml = require('./src/makehtml');
const createCardsFunction = require('./src/createemployeecards');

const teamArray = [];

function addManager() {
    inquire.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the manager?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the ID of the manager?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email of the manager?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
    ]).then( (answers) => {

        const manager = new manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamArray.push(manager);
        addEmployee();

    })   
}

function addEmployee() {
    inquire.prompt([
        {
            type: "list",
            name: "nextEmployee",
            message: "Would you like to add an Engineer, Intern, or are you finished with your team?",
            choices: [
                "Engineer",
                "Intern",
                "Done"
            ]
        },
        {
            when: (answers) => {
                if(answers.nextEmployee === "Done") {
                    // const newHtml = generateHtml.generateTeamProfile(teamArray);
                    // writeToFile(newHtml);
                    const newHtml = createCardsFunction.createCards(teamArray);
                    writeToFile(newHtml);
                }
            }
        },
        {
            type: "input",
            name: "name",
            message: `What is the name of the employee?`
        },
        {
            type: "input",
            name: "id",
            message: `What is the ID of the employee?`
        },
        {
            type: "input",
            name: "email",
            message: `What is the email of the employee?`
        },
        {
            when: (answers) => answers.nextEmployee === "Engineer",
            type: "input",
            name: "github",
            message: `What is the github username for this Engineer?`
        },
        {
            when: (answers) => answers.nextEmployee === "Intern",
            type: "input",
            name: "school",
            message: `What is the name of the school this Intern attends?`
        }
    ]).then( (answers) => {

        if(answers.nextEmployee === "engineer") {
            const engineer = new engineer(answers.name, answers.id, answers.email, answers.github);
            teamArray.push(engineer);
        }
        if(answers.nextEmployee === "intern") {
            const intern = new intern(answers.name, answers.id, answers.email, answers.school);
            teamArray.push(intern);
        }
        addEmployee();

    })
}

function writeToFile(newHtml) {

    fs.writeFile("generatedTeamProfileWebsite.html", newHtml, function(err) {

        if(err) return console.log(err);
        else process.exit();
        
    });



}

addManager();


