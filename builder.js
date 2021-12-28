const { readFileSync, writeFileSync } = require('fs');

const inputFile = readFileSync('./src/Card.js');
writeFileSync('./dist/Card.js', inputFile);
console.log('Completed building Card.js');