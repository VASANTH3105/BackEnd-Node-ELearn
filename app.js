//to import use readline
// R-Read
// E-Evaluate
// P-Print
// L-Loop
const readline = require('readline');
//This going to return an object
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name: ", (name) => {
    //call back function
    console.log("You entered "+name);
    //Interface is still open not closed to close
    rl.close();
})

rl.on('close', () => {
    console.log("Interface closed");
    process.exit(0); // 0 is exit code
})

