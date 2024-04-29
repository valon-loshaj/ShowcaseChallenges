const twoSum = function (numbers, target) {
	let left = 0;
	let right = numbers.length - 1;

	while (left < right) {
		const sum = numbers[left] + numbers[right];
		if (sum === target) {
			// Since the problem expects 1-based indices, add 1 to each index
			return [left + 1, right + 1];
		} else if (sum < target) {
			// If the sum is less than the target, move the left pointer to increase the sum
			left++;
		} else {
			// If the sum is more than the target, move the right pointer to decrease the sum
			right--;
		}
	}

	// Since the problem guarantees one solution, this return is theoretical and should never be reached
	return [-1, -1]; // To handle unexpected cases or inputs
};
