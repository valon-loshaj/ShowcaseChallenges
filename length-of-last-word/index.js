/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
	// Trim the string to remove leading and trailing spaces
	let trimmed = s.trim();
	// Find the last space in the trimmed string
	let lastSpaceIndex = trimmed.lastIndexOf(" ");

	// If there's no space, the entire string is a single word
	if (lastSpaceIndex === -1) {
		return trimmed.length;
	}

	// Return the length of the substring from the last space to the end of the string
	return trimmed.length - lastSpaceIndex - 1;
};
