#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userguessednumber",
        message: "please guess a number between 1 - 6 ",
    },
]);
console.log(answers);
if (answers.userguessednumber === randomnumber) {
    console.log("congratulation you! you guessed right number");
}
else {
    console.log("you guesssd a wrong number");
}
