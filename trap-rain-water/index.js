/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
	if (height.length === 0) return 0; // Handle empty array edge case

	// Calculate the left and right max height for each index
	const leftMax = new Array(height.length).fill(0);
	const rightMax = new Array(height.length).fill(0);

	// Initialize the first and last elements of leftMax and rightMax arrays
	leftMax[0] = height[0];
	rightMax[height.length - 1] = height[height.length - 1];

	// Fill in the leftMax array
	for (let i = 1; i < height.length; i++) {
		leftMax[i] = Math.max(height[i], leftMax[i - 1]);
	}

	// Fill in the rightMax array
	for (let j = height.length - 2; j >= 0; j--) {
		rightMax[j] = Math.max(height[j], rightMax[j + 1]);
	}

	// Calculate trapped water
	let maxWater = 0;
	for (let k = 0; k < height.length; k++) {
		maxWater += Math.min(leftMax[k], rightMax[k]) - height[k];
	}

	return maxWater;
};
