/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
	// sort the array in increasing order
	nums.sort((a, b) => a - b);
	// declare the result array which will be pushed to
	const result = [];

	// loop through the nums array skipping two elements because of the two pointers being used
	for (let i = 0; i < nums.length - 2; i++) {
		// check for duplicate elements
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		// declare left and right pointers
		let left = i + 1;
		let right = nums.length - 1;

		// use a while loop to close in on the array from left and right
		while (left < right) {
			// calculare the current sum based on pointers
			const sum = nums[i] + nums[left] + nums[right];
			// if the sum is 0 then add it to results
			if (sum === 0) {
				result.push([nums[i], nums[left], nums[right]]);
				// add logic to skip duplicate elements
				while (left < right && nums[left] === nums[left + 1]) left++;
				while (left < right && nums[right] === nums[right - 1]) right--;
				// move left pointer to the right and right pointer to the left
				left++;
				right--;
			}
			// if the sum is below 0 then more left pointer to the right so you can move towards higher number
			else if (sum < 0) {
				left++;
			}
			// else move the right pointer to the left to move towards lower numbers
			else {
				right--;
			}
		}
	}
	return result;
};
