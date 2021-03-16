const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// console.log('Hello what is your name?');

// rl.question() @params: 'question to ask as a string', cb(answer)
// rl.question('What is your name?\t', answer => {
// 	console.log(`Hello ${answer}, nice to meet you.`);
// 	rl.close();
// });

// console.log('Hello, what is your name?');

// rl.on('line', input => {
// 	console.log(`Hello ${input}, nice to meet you.`);
// 	rl.close(); // stops listening for inputs and outputs in the console
// });

rl.question('What is your name?\n', name => {
	const response = { name };
	rl.question('What is your age?\n', age => {
		response.age = age;
		console.log(`Hello ${response.name}, you are ${response.age} years old.`);
		rl.close();
	});
});

// rl.on('line', input => {
// 	if (input === 'exit') {
// 		rl.close();
// 	} else {
// 		console.log(input);
// 	}
// });

// rl.on('close', () => {
// 	console.log('goodbye!');
// });

// prompt @param string prompt
rl.setPrompt('What is your age');
// execute prompt
rl.prompt();
// setting prompt to something new
// rl.setPrompt('What is your name?');
// // execute new prompt
// rl.prompt();

// easier way to do the same thing
// console.log('What is your age?');
