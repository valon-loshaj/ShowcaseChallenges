/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
	const phrase = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
	let reversed = phrase.split("").reverse().join("");
	if (phrase === reversed) {
		return true;
	} else {
		return false;
	}
};
