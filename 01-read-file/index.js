const fs = require('fs');
const path = require('path');
const process = require('process');

const stdout = process.stdout;
const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
stream.on('data', someText => stdout.write(someText));

