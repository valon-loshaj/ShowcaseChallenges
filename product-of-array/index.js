/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	// use three arrays to solve this problem
	// prefix array to calculate the product of integers to the left of each index
	const prefixArray = new Array(nums.length);
	// sufix array to calculate the product of integers to the right of each index
	const sufixArray = new Array(nums.length);
	// results array to hold the final array
	const results = new Array(nums.length);
	// set the first and last elements of the prefix and sufix arrays to 1
	prefixArray[0] = 1;
	sufixArray[nums.length - 1] = 1;

	// loop through nums to determine the prefix array
	for (let i = 1; i < nums.length; i++) {
		prefixArray[i] = prefixArray[i - 1] * nums[i - 1];
	}

	// loop througn nums to determine the sufix array
	for (let j = nums.length - 2; j >= 0; j--) {
		sufixArray[j] = sufixArray[j + 1] * nums[j + 1];
	}

	// one final loop to calculate the results
	for (let k = 0; k < nums.length; k++) {
		results[k] = prefixArray[k] * sufixArray[k];
	}
	return results;
};
