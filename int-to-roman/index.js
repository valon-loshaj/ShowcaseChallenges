/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	// create an array of numbers and corresponding roman numerals of int to roman numeral equivalents
	const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	const numerals = [
		"M",
		"CM",
		"D",
		"CD",
		"C",
		"XC",
		"L",
		"XL",
		"X",
		"IX",
		"V",
		"IV",
		"I",
	];
	// declare a variable which will contain the roman numeral
	let result = "";

	// loop through the integer values
	for (let i = 0; i < integers.length; i++) {
		// use a while loop to add the appropriate number of roman numerals
		while (num >= integers[i]) {
			result += numerals[i];
			num -= integers[i];
		}
	}
	return result;
};
