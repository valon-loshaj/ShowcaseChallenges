/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
*/
function majorityElement(nums) {
	const counts = {};
	const majorityCount = Math.floor(nums.length / 2);

	for (let num of nums) {
		if (counts[num] === undefined) {
			counts[num] = 0;
		}
		counts[num]++;

		// Check if the current element is now the majority element
		if (counts[num] > majorityCount) {
			return num;
		}
	}
}
