const canConstruct = function (ransomNote, magazine) {
	const magMap = new Map();

	// Populate the magazine map with character counts
	for (const char of magazine) {
		const count = magMap.get(char) || 0;
		magMap.set(char, count + 1);
	}

	// Check if ransomNote can be constructed using the magazine map
	for (const letter of ransomNote) {
		const count = magMap.get(letter) || 0;
		if (count === 0) {
			return false; // Letter not available or used up
		}
		magMap.set(letter, count - 1); // Decrease the count of the used letter
	}

	// If the loop completes without returning false, ransomNote can be constructed
	return true;
};
