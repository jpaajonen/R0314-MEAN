var fs = require("fs");

/*var data2 = fs.readFileSync("example2.txt");
var data = fs.readFileSync("example.txt");
var addendum = "I wrote this!"

fs.writeFileSync('uusiFile.txt', data);
fs.appendFileSync('uusiFile.txt', data2);
fs.appendFileSync('uusiFile.txt', addendum);
*/

var data2 = fs.readFileSync("example2.txt");
var data = fs.readFileSync("example.txt");
var addendum = "I wrote this!\n"

fs.writeFileSync('uusiFile.txt', addendum);
fs.appendFileSync('uusiFile.txt', data);
fs.appendFileSync('uusiFile.txt', data2);
fs.appendFileSync('uusiFile.txt', addendum);


//console.log(data.toString());
//console.log(data2.toString());


//console.log(addendum);

/*var fs = require("fs");

const data = fs.readFileSync("example.txt");
const data2 = fs.readFileSync("example2.txt");

var yhdistetty = data + data2;

fs.writeFile("message.txt", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
})
fs.writeFile("message.txt", data2, ["a"], (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    
});*/