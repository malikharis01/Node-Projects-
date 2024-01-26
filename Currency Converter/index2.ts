import inquirer from "inquirer";

let Converter = {
    PKR: {
        USD: 0.0044,
        GBP: 0.0037,
        EUR: 0.004,
        JPY: 0.48,
        CAD: 0.0055,
        AUD: 0.006,
        CNY: 0.028,
        INR: 0.062,
        AED: 0.016,
        ZAR: 0.075,
        PKR: 1,
    },
    GBP: {
        USD: 1.21,
        GBP: 1,
        EUR: 1.11,
        JPY: 138.31,
        CAD: 1.57,
        AUD: 1.72,
        CNY: 7.77,
        INR: 99.55,
        AED: 4.88,
        ZAR: 20.17,
        PKR: 271.79,
    },
    USD: {
        USD: 1,
        GBP: 0.83,
        EUR: 0.91,
        JPY: 112.32,
        CAD: 1.26,
        AUD: 1.38,
        CNY: 6.45,
        INR: 73.58,
        AED: 3.67,
        ZAR: 15.23,
        PKR: 225.50,
    },
    EUR: {
        USD: 1.10,
        GBP: 0.90,
        EUR: 1,
        JPY: 123.45,
        CAD: 1.42,
        AUD: 1.56,
        CNY: 7.03,
        INR: 89.91,
        AED: 4.41,
        ZAR: 18.26,
        PKR: 250,
    },
    JPY: {
        USD: 0.0089,
        GBP: 0.0072,
        EUR: 0.0081,
        JPY: 1,
        CAD: 0.011,
        AUD: 0.012,
        CNY: 0.056,
        INR: 0.71,
        AED: 0.035,
        ZAR: 0.15,
        PKR: 2.08,
    },
    CAD: {
        USD: 0.79,
        GBP: 0.64,
        EUR: 0.70,
        JPY: 88.37,
        CAD: 1,
        AUD: 1.10,
        CNY: 4.96,
        INR: 63.30,
        AED: 3.11,
        ZAR: 12.88,
        PKR: 181.82,
    },
    AUD: {
        USD: 0.72,
        GBP: 0.58,
        EUR: 0.64,
        JPY: 79.85,
        CAD: 0.91,
        AUD: 1,
        CNY: 4.52,
        INR: 57.79,
        AED: 2.84,
        ZAR: 11.78,
        PKR: 166.67,
    },
    CNY: {
        USD: 0.15,
        GBP: 0.13,
        EUR: 0.14,
        JPY: 17.82,
        CAD: 0.20,
        AUD: 0.22,
        CNY: 1,
        INR: 12.79,
        AED: 0.63,
        ZAR: 2.63,
        PKR: 35.71,
    },
    INR: {
        USD: 0.014,
        GBP: 0.01,
        EUR: 0.011,
        JPY: 1.40,
        CAD: 0.016,
        AUD: 0.017,
        CNY: 0.078,
        INR: 1,
        AED: 0.049,
        ZAR: 0.20,
        PKR: 16.01,
    },
    AED: {
        USD: 0.27,
        GBP: 0.21,
        EUR: 0.23,
        JPY: 28.36,
        CAD: 0.32,
        AUD: 0.35,
        CNY: 1.57,
        INR: 20.41,
        AED: 1,
        ZAR: 4.15,
        PKR: 62.50,
    },
    ZAR: {
        USD: 0.066,
        GBP: 0.049,
        EUR: 0.055,
        JPY: 6.63,
        CAD: 0.078,
        AUD: 0.085,
        CNY: 0.38,
        INR: 5.03,
        AED: 0.24,
        ZAR: 1,
        PKR: 13.33,
    },
};

type mytype = {
    from: "PKR" | "GBP" | "USD" | "EUR" | "JPY" | "CAD" | "AUD" | "CNY" | "INR" | "AED" | "ZAR",
    to: "PKR" | "GBP" | "USD" | "EUR" | "JPY" | "CAD" | "AUD" | "CNY" | "INR" | "AED" | "ZAR",
    amount: number
}


    let answer: mytype = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            choices: ["PKR", "GBP", "USD", "EUR", "JPY", "CAD", "AUD", "CNY", "INR", "AED", "ZAR"],
            message: "Kindly select your currency"
        },
        {
            name: "to",
            type: "list",
            choices: ["PKR", "GBP", "USD", "EUR", "JPY", "CAD", "AUD", "CNY", "INR", "AED", "ZAR"],
            message: "Kindly select your conversion currency"
        },
        {
            name: "amount",
            type: "number",
            message: "Kindly enter your conversion amount"
        },
    ])
        let { from, to, amount } = answer
if (from && to && amount) {
    let conversion = Converter[from][to] * amount
    console.log(`Your conversion amount is ${from} to ${to} is ${conversion}`)
} else {
    console.log("Invalid amount ")
}
