const containsNearbyDuplicate = function (nums, k) {
	// Create a map to track array elements and their latest index
	const indexMap = new Map();

	// Loop through the array
	for (let i = 0; i < nums.length; i++) {
		const lastIndex = indexMap.get(nums[i]);
		// For each element, check if it exists in the map and is not undefined
		if (lastIndex !== undefined) {
			// If it is found, compare the latest index with the current index
			if (Math.abs(lastIndex - i) <= k) {
				// If the index difference is <= k, return true on the first instance of this being true
				return true;
			}
		}
		// Always update the map with the current index of the element
		indexMap.set(nums[i], i);
	}
	// Upon exiting the loop without finding any duplicates, return false
	return false;
};
