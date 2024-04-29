/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
	let sIndex = 0;
	for (let i = 0; i < t.length; i++) {
		if (s.charAt(sIndex) === t.charAt(i)) {
			sIndex++; // Move to the next character in s
		}
		if (sIndex === s.length) {
			return true; // All characters in s are found in t in order
		}
	}
	return sIndex === s.length; // Check if we matched the whole string s
};
