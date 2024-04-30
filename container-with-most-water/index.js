/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
	// need variables for the max area, the left and right pointer
	let maxArea = 0;
	let left = 0;
	let right = height.length - 1;

	// use a while loop to close in on the array from left and right
	while (left < right) {
		// calculate current width
		const currentWidth = right - left;
		// calculate the min height
		const minHeight = Math.min(height[left], height[right]);
		// derive current area by multiplying the width by the height
		const currentArea = currentWidth * minHeight;
		// set max area to the max of existing max area or current area
		maxArea = Math.max(maxArea, currentArea);

		// determine if you need to adjust left or right
		if (height[left] > height[right]) {
			right--;
		} else {
			left++;
		}
	}
	return maxArea;
};
