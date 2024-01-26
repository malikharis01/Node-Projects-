import inquirer from "inquirer";
let todo = [];
while (true) {
    let answer = await inquirer.prompt([
        {
            name: "TODO",
            type: "input",
            message: "What do you want to add in TODO list?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "What do you want to add more TODO list?",
            default: false
        },
    ]);
    let { TODO, addmore } = answer;
    if (TODO) {
        todo.push(TODO);
    }
    else
        (console.log("Kindly add some valid input"));
}
if (todo.length > 0) {
    console.log("Your TODO list is");
    todo.forEach(todo => {
        console.log(todo);
    });
}
