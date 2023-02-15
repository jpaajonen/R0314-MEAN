const fs = require('fs');

const dirContents = fs.readdirSync('./');
console.log(dirContents);

fs.readdir('./', function(err, contents)  {
    if (err) console.log("Error " + err);
    else console.log("Result "+ contents);
});
