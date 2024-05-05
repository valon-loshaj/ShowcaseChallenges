const isAnagram = function (s, t) {
	// Check if both strings have the same length
	if (s.length !== t.length) {
		return false;
	}

	const charCount = {};

	// Count each character in string s
	for (let char of s) {
		if (charCount[char]) {
			charCount[char]++;
		} else {
			charCount[char] = 1;
		}
	}

	// Compare characters in string t against the charCount map
	for (let char of t) {
		if (!charCount[char]) {
			return false; // Character in t not found in s or mismatch in count
		} else {
			charCount[char]--;
			if (charCount[char] < 0) {
				return false; // More occurrences of char in t than in s
			}
		}
	}
	return true; // Passed all checks, s and t are anagrams
};
