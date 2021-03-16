// unit test: tests a specific function or block of code, e.g. a unit of code
const add = require('../math/add');

// test @params: 'String Title', cb()
test('Testing Add Function', () => {
	// expect() @params: expression || value @method-call matcher
	// expect(2 + 2).toBe(4);
	// if a the string hello world includes the word hello
	// const str = 'hell world';
	// expect(str.includes('hello')).toBe(true);

	expect(add(5, 5)).toBe(10);
	expect(add('string', 20)).toBe(null);
});
