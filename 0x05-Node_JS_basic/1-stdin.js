console.log('Welcome to ALX, what is your name?');
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => {
  const name = chunk.trim();
  console.log(`Your name is: ${name}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
