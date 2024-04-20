const productExceptSelf = function (nums) {
	const length = nums.length;
	const prefix = new Array(length);
	const suffix = new Array(length);
	const result = new Array(length);

	// Initialize the first element of left array and the last element of right array
	prefix[0] = 1;
	suffix[length - 1] = 1;

	// populate the prefix
	for (let i = 1; i < length; i++) {
		prefix[i] = nums[i - 1] * prefix[i - 1];
	}

	// populate suffix
	for (let j = length - 2; j >= 0; j--) {
		suffix[j] = nums[j + 1] * suffix[j + 1];
	}

	// populate the result
	for (let i = 0; i < length; i++) {
		result[i] = prefix[i] * suffix[i];
	}
	return result;
};
