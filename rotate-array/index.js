/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

function rotate(nums, k) {
	k = k % nums.length;
	if (k === 0 || nums.length <= 1) return;

	const reverse = (start, end) => {
		while (start < end) {
			let temp = nums[start];
			nums[start] = nums[end];
			nums[end] = temp;
			start++;
			end--;
		}
	};

	// Reverse the whole array
	reverse(0, nums.length - 1);
	// Reverse the first k elements
	reverse(0, k - 1);
	// Reverse the remaining elements
	reverse(k, nums.length - 1);
}

// Example usage:
let nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums); // Output: [5,6,7,1,2,3,4]
