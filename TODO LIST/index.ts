import inquirer from "inquirer";
type mytype = {
    TODO : string,
    addmore : boolean,
}
let todo:string[] = [];
let loop = true;
while(loop){
    let answer : mytype = await inquirer.prompt([
        {
        name : "TODO",
        type : "input",
        message : "What do you want to add in TODO list?"
        },
        {
        name : "addmore",
        type : "confirm",
        message : "What do you want to add more TODO list?",
        default : false
        },
    ])
let {TODO} = answer;
    loop = addmore;
    if (TODO){
        todo.push(TODO)
    }else (
        console.log("Kindly add some valid input")
    )
}
if (todo.length > 0){
    console.log("Your TODO list is");
  todo.forEach(todo => {
    console.log(todo)
  });
}