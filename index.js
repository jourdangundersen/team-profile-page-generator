const fs = require("fs");
const inquire = require("inquirer");
const Employee = require("./classes/employee");
const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");
const generateHtml = require('./source/makehtml');
const createCardsFunction = require('./source/createemployeecards');

const teamArray = [];

function addManager() {
    inquire.prompt([
        {
            type: "input",
            name: "name",
            message: "what is the name of the manager?"
        },
        {
            type: "input",
            name: "id",
            message: "what is the ID of the manager?"
        },
        {
            type: "input",
            name: "email",
            message: "what is the email of the manager?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "what is the manager's office number?"
        }
    ]).then( (answers) => {

        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamArray.push(manager);
        addEmployee();

    })   
}

function addEmployee() {
    inquire.prompt([
        {
            type: "list",
            name: "nextEmployee",
            message: "would you like to add an Engineer, Intern, or are you finished with your team?",
            choices: [
                "Engineer",
                "Intern",
                "Done"
            ]
        },
        {
            when: (answers) => {
                if(answers.nextEmployee === "Done") {
                    const newHtml = createCardsFunction.createCards(teamArray);
                    writeToFile(newHtml);
                }
            }
        },
        {
            type: "input",
            name: "name",
            message: `what is the name of the employee?`
        },
        {
            type: "input",
            name: "id",
            message: `what is the ID of the employee?`
        },
        {
            type: "input",
            name: "email",
            message: `what is the email of the employee?`
        },
        {
            when: (answers) => answers.nextEmployee === "Engineer",
            type: "input",
            name: "github",
            message: `what is the github username for this Engineer?`
        },
        {
            when: (answers) => answers.nextEmployee === "Intern",
            type: "input",
            name: "school",
            message: `what is the name of the school this Intern attends?`
        }
    ]).then( (answers) => {

        if(answers.nextEmployee === "Engineer") {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamArray.push(engineer);
        }
        if(answers.nextEmployee === "Intern") {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
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


