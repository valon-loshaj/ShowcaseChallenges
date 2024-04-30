/*
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
	//start jumps at 0
	let jumps = 0;
	// track the current hop distance
	let currentEnd = 0;
	// track the furthest you can jump
	let furthest = 0;
	// loop through nums
	for (let i = 0; i < nums.length - 1; i++) {
		// for each index furthest will be set to either the current furthest or the new furthest
		furthest = Math.max(furthest, i + nums[i]);
		// if the iterator catches up to the current end then increment jumps and set a new current end
		if (i === currentEnd) {
			jumps++;
			currentEnd = furthest;
		}
		// if the currentEnd reaches the final index then break
		if (currentEnd >= nums.length - 1) {
			break;
		}
	}
	return jumps;
};
