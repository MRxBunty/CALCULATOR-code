import inquirer from "inquirer";
const anwers = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: "enter your first number"
    },
    { type: "number",
        name: "numbertwo",
        message: "enter your second number"
    },
    { type: "list",
        name: "operator",
        message: "enter your operator",
        choices: ["+", "-", "*", "/"] }
]);
const { numberone, numbertwo, operator } = anwers;
let result;
switch (operator) {
    case "+":
        result = numberone + numbertwo;
        break;
    case "-":
        result = numberone - numbertwo;
        break;
    case "*":
        result = numberone * numbertwo;
        break;
    case "/":
        result = numberone / numbertwo;
        break;
    default:
        console.log("invalid operator");
}
console.log(`${numberone} ${operator} ${numbertwo} = ${result}`);
