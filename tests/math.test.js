const add = require('../math/add');
const subtract = require('../math/subtract');
const multiply = require('../math/multiply');
const divide = require('../math/divide');

// Integration test is just simply testing to unit test at the same time or better yet working together
test('Integration Test for Add & Subtract', () => {
	// expect(subtract(add(2, 2), add(1, 1))).toBe(2);
	expect(subtract(10, 5) + add(2, 2)).toBe(9);
});
