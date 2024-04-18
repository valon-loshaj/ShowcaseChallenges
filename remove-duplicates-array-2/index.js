/*
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

function removeDuplicates(nums) {
	if (nums.length === 0) {
		return 0;
	}

	// Initialize lastUnique index to 0 to track position for result to be written.
	let lastUnique = 0;
	// Initialize count to 1 for the first element.
	let count = 1;

	// Iterate from the second element of the array.
	for (let i = 1; i < nums.length; i++) {
		// Check if current element is the same as the last recorded unique element
		if (nums[i] === nums[lastUnique]) {
			// Increment count if it's the same element
			count++;
			// If count is less than or equal to 2, copy it to lastUnique index
			if (count <= 2) {
				lastUnique++;
				nums[lastUnique] = nums[i];
			}
		} else {
			// Reset count for a new unique element
			count = 1;
			// Move lastUnique pointer and copy current element
			lastUnique++;
			nums[lastUnique] = nums[i];
		}
	}

	// The length of the part of the array with allowed duplicates
	return lastUnique + 1;
}
