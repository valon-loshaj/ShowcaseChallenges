/*
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	// loop through nums
	let furthest = 0;
	for (let i = 0; i < nums.length; i++) {
		// handle the case where the current index is beyond the furthest jump
		if (i > furthest) {
			return false;
		}
		// determine what is the furthest you can jump
		furthest = Math.max(furthest, i + nums[i]);
		// if the furthest point goes beyond the end of the lenght of the array, return true
		if (furthest >= nums.length - 1) {
			return true;
		}
	}
	return false;
};
