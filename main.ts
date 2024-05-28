#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt ([
    { message: "Enter first Number", type: "number", name: "firstnumber"},
    {message: "Enter Second Number", type: "number", name: "secondnumber"},
    {message: "Enter Third Number", type: "number", name: "thirdnumber"},
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);

// Conditional Statement for Calcultor,
if (answer.operator === "Addition"){
    console.log (answer.firstnumber + answer.secondnumber + answer.thirdnumber);
} else if (answer.operator === "Subtraction"){
    console.log (answer.firstnumber - answer.secondnumber - answer.thirdnumber);
} else if(answer.operator === "Multiplication"){
    console.log (answer.firstnumber * answer.secondnumber * answer.thirdnumber);
} else if(answer.operator === "Division") {
    console.log (answer.firstnumber / answer.secondnumber / answer.thirdnumber);
} else {
    console.log ("Please select valid operator");
}