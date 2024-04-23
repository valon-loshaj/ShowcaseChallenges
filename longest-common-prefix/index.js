/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	// start with the first element in strs
	let commonPrefix = strs[0];

	// check if the array is empty
	if (strs.length === 0) {
		return "";
	}

	// start from the second element and iterate over the array of strs
	for (let i = 1; i < strs.length; i++) {
		// check if the current element has the prefix inside of it
		while (strs[i].indexOf(commonPrefix) !== 0) {
			// iteratively trim the prefix by one character
			commonPrefix = commonPrefix.substring(0, commonPrefix.length - 1);

			// if the commonPrefix ever reduces to an empty string, return
			if (commonPrefix === "") {
				return "";
			}
		}
	}
	return commonPrefix;
};
