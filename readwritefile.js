//L4 - Read input write output
const fs = require('fs');
//fs variable stores a object
let textIn = fs.readFileSync('./Files/input.txt', 'utf-8');
//going to read the content in the file amd return it as a string
console.log(textIn);
//This method blocks the next line
//Single threaded log should wait for the file to be read before if it take 10 min next line should wait for 10 min

let content =  `Data read from input.txt file: ${textIn}. \n Date created ${new Date()}}`;
fs.writeFileSync('./Files/output.txt', content);
//The above line creates new file if it does not exist and writes the content to it

//reading file asynchronously
//readfile is a API
fs.readFile('./Files/input.txt', 'utf-8', (err, data) => {
    console.log(data);
});
//The above line reads the file asynchronously and does not block the next line
console.log("Reaing file...");
