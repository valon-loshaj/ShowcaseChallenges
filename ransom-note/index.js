const canConstruct = function (ransomNote, magazine) {
	const magMap = new Map();

	// Fill the map with character counts from the magazine
	for (const char of magazine) {
		if (char !== " ") {
			const currentCount = magMap.get(char) || 0;
			magMap.set(char, currentCount + 1);
		}
	}

	// Attempt to construct the ransom note from the magazine map
	for (const char of ransomNote) {
		if (char !== " ") {
			const currentCount = magMap.get(char) || 0;
			if (currentCount === 0) {
				return false; // Not enough of 'char' in magazine
			}
			magMap.set(char, currentCount - 1); // Use one instance of 'char'
		}
	}

	return true;
};
