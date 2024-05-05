const twoSum = function (nums, target) {
	const numMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const complement = target - num;

		if (numMap.has(complement)) {
			return [numMap.get(complement), i]; // Return indices of complement and current number
		}

		numMap.set(num, i); // Store number and its index in the map
	}

	throw new Error("No two sum solution"); // If no solution is found
};
