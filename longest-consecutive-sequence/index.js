const longestConsecutive = function (nums) {
	if (nums.length === 0) return 0;

	const numSet = new Set(nums);
	let maxLen = 0;

	for (const num of nums) {
		// Check if it's the start of a sequence
		if (!numSet.has(num - 1)) {
			let currentNum = num;
			let currentLen = 1;

			// Extend the sequence
			while (numSet.has(currentNum + 1)) {
				currentNum += 1;
				currentLen += 1;
			}

			// Update maximum length found
			maxLen = Math.max(maxLen, currentLen);
		}
	}

	return maxLen;
};
