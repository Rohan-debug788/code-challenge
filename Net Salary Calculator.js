const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate PAYE payments (annually)
function PAYEpayments(income) {
    if (income <= 288000) {
        return income * 0.1; // 10%
    } else if (income <= 388000) {
        return 28800 + (income - 288000) * 0.25; // 25%
    } else if (income <= 6000000) {
        return 28800 + 25000 + (income - 388000) * 0.3; // 30%
    } else if (income <= 9600000) {
        return 28800 + 25000 + 6360000 * 0.3 + (income - 6000000) * 0.325; // 32.5%
    } else {
        return 28800 + 25000 + 6360000 * 0.3 + 3600000 * 0.325 + (income - 9600000) * 0.35; // 35%
    }
}

// Function to calculate NHIF deductions
function NHIFdeduction(grossPay) {
    if (grossPay <= 5999) return 150;
    else if (grossPay <= 7999) return 300;
    else if (grossPay <= 11999) return 400;
    else if (grossPay <= 14999) return 500;
    else if (grossPay <= 19999) return 600;
    else if (grossPay <= 24999) return 750;
    else if (grossPay <= 29999) return 850;
    else if (grossPay <= 34999) return 900;
    else if (grossPay <= 39999) return 950;
    else if (grossPay <= 44999) return 1000;
    else if (grossPay <= 49999) return 1100;
    else if (grossPay <= 59999) return 1200;
    else if (grossPay <= 69999) return 1300;
    else if (grossPay <= 79999) return 1400;
    else if (grossPay <= 89999) return 1500;
    else if (grossPay <= 99999) return 1600;
    else return 1700;
}

// Function to calculate NSSF deductions
function NSSFdeduction(grossPay) {
    const tierOne = 7000;
    const tierTwo = 36000;
    if (grossPay <= tierOne) {
        return grossPay * 0.06; // 6%
    } else if (grossPay <= tierTwo) {
        return tierOne * 0.06; // Max at tier one
    } else {
        return tierOne * 0.06 + (grossPay - tierTwo) * 0.06; // 6% of the amount above tier two
    }
}

// Main function to calculate net salary
function calculateNetSalary(basicPay, benefits) {
    const grossPay = basicPay + benefits;

    // Calculating deductions
    const nhif = NHIFdeduction(grossPay);
    const nssf = NSSFdeduction(grossPay);
    const payeAnnual = PAYEpayments(grossPay * 12);
    const paye = payeAnnual / 12; // Monthly PAYE

    // Calculating total deductions
    const totalDeductions = nhif + nssf + paye;

    // Calculating net salary
    const netSalary = grossPay - totalDeductions;

    // Displaying the results
    console.log(`Your gross salary is: KES ${grossPay}`);
    console.log(`Your NHIF payment is: KES ${nhif}`);
    console.log(`Your NSSF payment is: KES ${nssf}`);
    console.log(`Your PAYE payment is: KES ${paye}`);
    console.log(`Your Total Deductions are: KES ${totalDeductions}`);
    console.log(`Your Net Pay is: KES ${netSalary}`);
}

// Get user input for basic pay and benefits
rl.question("Enter your basic pay: ", (basicPayInput) => {
    const basicPay = Number(basicPayInput);
    rl.question("Enter your benefits: ", (benefitsInput) => {
        const benefits = Number(benefitsInput);
        calculateNetSalary(basicPay, benefits);
        rl.close();
    });
});
