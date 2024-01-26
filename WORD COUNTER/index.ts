import inquirer from "inquirer";
import { type } from "os";
type mytype = {
wordcounter : string,
alpcount : string,
choice : string
}
let answer:mytype = await inquirer.prompt([
    {
        name : "choice",
        type : "list",
        choices: ["Alphabets","Words"],
        message: "Kindly select what do you want to count"
    },
    {
        name: "wordcounter",
        type : "string",
        message :"Kindly enter your content to count the words",
        when(answer){
            return answer.choice == "Words"
        }
    },
    {
        name: "alpcount",
        type : "string",
        message :"Kindly enter your content to count the words",
        when(answer){
            return answer.choice == "Alphabets"
        }
    },
])
let {choice,wordcounter,alpcount} = answer;
if (choice && wordcounter){
    let word = answer.wordcounter.trim().split(" ").length
    console.log(`Your word count is ${word}`)
}
else if (choice && alpcount){
    let word = answer.alpcount.length
    console.log(`Your alphabets count is ${word}`)
}else{
    console.log("Please enter your sentence");
}







    