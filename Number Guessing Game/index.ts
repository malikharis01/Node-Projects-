import inquirer from "inquirer";
for (let i = 0; i < 10; i++) {
    type mytype = {
        Guessnumber: number
    }
    let systemGeneratedNumber = Math.floor(Math.random() * 10)
    let answer: mytype = await inquirer.prompt([
        {
            type: "number",
            name: "Guessnumber",
            message: "Please enter your number between 1 & 10"
        }])


    let { Guessnumber } = answer
    console.log(`Your guess is ${Guessnumber} but the system generated number is  ${systemGeneratedNumber}`)
    if (systemGeneratedNumber === Guessnumber) {
        console.log("Congratulations! Your number is correct")
    } else {
        console.log("Sorry! Please enter next number")
    }
}

let correctAnswers = 0;
if (correctAnswers > 5) {
    console.log("Congratulations! You won with more than 5 correct answers!");
} else {
    console.log("Sorry you lose the game! Better luck next time!");
}
