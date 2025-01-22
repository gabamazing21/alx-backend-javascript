// const { spawn } = require('child_process');

// const child = spawn('node', [], { stdio: ['pipe', 'pipe', 'pipe']})

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
});
process.on('SIGINT', () => {
  console.log('\nThis important software is now closing ');
  process.exit(0);
});
