const fs = require('fs');

const data = fs.readFileSync('example.txt');
const data2 = fs.readFileSync('example2.txt');

var yhdistetty = data + data2;

fs.mkdir('C:/Users/joona/OneDrive/Tiedostot/Laurea/Full Stack/WS1/newdir', { recursive: true }, (err) => {
    if (err) throw err;
  });

fs.appendFile('C:/Users/joona/OneDrive/Tiedostot/Laurea/Full Stack/WS1/newdir/message.txt', data, (err) => {
    if (err) throw err;
    console.log('The first file has been saved to the new directory!');
})
fs.appendFile('C:/Users/joona/OneDrive/Tiedostot/Laurea/Full Stack/WS1/newdir/message.txt', data2, (err) => {
        if (err) throw err;
        console.log('The second file has been saved to the new directory!');
});

/*fs.rmdir('C:/Users/joona/OneDrive/Tiedostot/Laurea/Full Stack/WS1/newdir', { recursive: true }, (err) => {
    if (err) throw err;
    console.log("New directory removed.")
  });*/