const process = require('process');
const path = require('path');
const fs = require('fs');
const readline = require('readline');
const { stdout } = require('process');

const stream = fs.createWriteStream(path.join(__dirname, 'file.txt'), 'utf-8');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Please, enter your text: ',
});

rl.prompt();

rl.on('line', inp => {
  if (inp.trim() === 'exit') {
    rl.close();
    process.exit();
  }

  stream.write(inp + '\n');
});

rl.on('close', () => {
  stdout.write('Goodbye, see you later');
});
