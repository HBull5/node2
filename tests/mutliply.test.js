const multiply = require('../math/multiply');

test('Testing Multiply Function w/ 3 & 2', () => {
	expect(multiply(3, 2)).toBe(6);
});

test('Testing Multiply Function w/ "string" & "taco"', () => {
	expect(multiply('string', 'taco')).toBeNull();
	// .toBe(null); === .toBeNull();
});
