const groupAnagrams = function (strs) {
	const anagramMap = new Map();

	// Iterate over each string in the input array
	for (const str of strs) {
		// Sort the string to use as a key
		const sortedStr = str.split("").sort().join("");
		// If the sorted string key is not in the map, initialize an empty array
		if (!anagramMap.has(sortedStr)) {
			anagramMap.set(sortedStr, []);
		}
		// Push the original string into the array associated with the sorted key
		anagramMap.get(sortedStr).push(str);
	}

	// Extract all values from the map to form the final grouped anagrams
	return Array.from(anagramMap.values());
};
