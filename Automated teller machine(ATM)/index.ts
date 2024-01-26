
import inquirer from "inquirer";
type atmtype = {
    userid: string,
    pin_code: number,
    Account_type: string,
    options: string,
    Fastcash: number,
    Amount: number,
    balance_inquiry: string,
}
let questions: atmtype = await inquirer.prompt([
    {
        name: "userid",
        type: "input",
        message: "Please enter your userid"
    },
    {
        name: "pin_code",
        type: "number",
        message: "Please enter your pin code"
    },
    {
        name: "Account_type",
        type: "list",
        choices: ["Saving Account", "Current Account"],
        message: "Please enter your account type"
    },
    {
        name: "options",
        type: "list",
        choices: ["Fastcash", "withdraw", "transfer", "BalanceInquiry"],
        message: "Please select your options",
        when(questions) {
            return questions.Account_type;
        }
    },
    {
        name: "Fastcash",
        type: "list",
        choices: [1000, 5000, 10000, 20000],
        message: "Please select your amount",
        when(questions) {
            return questions.options == "Fastcash";
        }
    },
    {
        name: "Amount",
        type: "number",
        message: "Please enter your withdraw amount",
        when(questions) {
            return questions.options == "withdraw";
        }
    },
    {
        name: "Amount",
        type: "number",
        message: "Please enter your transfer amount",
        when(questions) {
            return questions.options == "transfer";
        }
    },
    {
        name: "balance_inquiry",
        type: "list",
        choices: ["Yes", "No"],
        message: "Do you want to print your receipt?",
        when(questions) {
            return questions.options == "BalanceInquiry";
        }
    },
   
]);
if(questions.userid && questions.pin_code){
    let balance = Math.floor(Math.random()*10000000);
    console.log(`Your current balance was ${balance}`)
    let enteredamount = questions.Fastcash;
    let enteredamount2 = questions.Amount;
    if (balance >= enteredamount || balance>= enteredamount2){
        let remaining = balance - enteredamount || balance - enteredamount2;
        console.log(`Your remaining balance is ${remaining}`)
    }
}else (
    console.log("Please enter your valid input")
)







































