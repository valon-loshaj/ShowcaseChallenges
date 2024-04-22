/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
	const symbolMap = new Map([
		["I", 1],
		["V", 5],
		["X", 10],
		["L", 50],
		["C", 100],
		["D", 500],
		["M", 1000],
	]);

	let romanToInt = 0;
	// loop through the characters of 's'
	for (let i = 0; i < s.length; i++) {
		const currentValue = symbolMap.get(s.charAt(i));
		const nextValue = i + 1 < s.length ? symbolMap.get(s.charAt(i + 1)) : 0;

		// Check if the current value is less than the next value
		if (currentValue < nextValue) {
			// It's a subtraction case
			romanToInt -= currentValue;
		} else {
			// Regular addition case
			romanToInt += currentValue;
		}
	}

	return romanToInt;
};
