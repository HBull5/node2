const subtract = require('../math/subtract');

test('Subtract function w/ 10 & 3', () => {
	expect(subtract(10, 3)).toBe(7);
});

test('Subtract function w/ true & "string"', () => {
	expect(subtract(true, 'string')).toBeNull();
});

test('Subtract function w/ 5', () => {
	expect(subtract(5)).toBeNull();
});
