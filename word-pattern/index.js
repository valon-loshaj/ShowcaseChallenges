/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
	// create a map to track the mapping between s and pattern
	const sToPattern = new Map();
	// create a map to track the mapping between the pattern and s
	const patternToS = new Map();

	// create an array out of s separating the words by space
	const words = s.split(" ");

	// early exit if words is not the same length as pattern
	if (words.length !== pattern.length) {
		return false;
	}

	// loop through strings in s array checking if the mappings are correct
	for (let i = 0; i < words.length; i++) {
		const sElement = words[i];
		const patternChar = pattern.charAt(i);

		// check if sToPattern has an existing mapping
		if (sToPattern.has(sElement)) {
			// check if the mapping is in-line with current iteration
			if (sToPattern.get(sElement) !== patternChar) {
				return false;
			}
		} else {
			if (patternToS.has(patternChar)) {
				return false;
			}
			sToPattern.set(sElement, patternChar);
			patternToS.set(patternChar, sElement);
		}
	}
	return true;
};
