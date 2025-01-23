const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('Welcome to Holberton School, what is your name?');

rl.question('', (name) => {
  if (name) console.log(`Your name is: ${name}`);
});
rl.on('close', () => {
  console.log('This important software is now closing');
});
process.on('SIGINT', () => {
  console.log('\nThis important software is now closing');
  process.exit(0);
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
