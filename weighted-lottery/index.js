// function used to initialize the cumulative weights based on the original array
function initialize(weights) {
	const cumulativeWeights = [];
	let totalSum = 0;

	weights.forEach((weight) => {
		totalSum += weight;
		cumulativeWeights.push(totalSum);
	});

	return { cumulativeWeights, totalSum };
}

// helper function used to perform a binary search of the cumulative weights
function binarySearch(cumulativeWeights, target) {
	let low = 0;
	let high = cumulativeWeights.length - 1;

	while (low < high) {
		const mid = Math.floor((low + high) / 2);
		if (target > cumulativeWeights[mid]) {
			low = mid + 1;
		} else {
			high = mid;
		}
	}

	return low;
}

// main function used to pick a random number within the appropriate range and complete a search using the helper function
function pickIndex({ cumulativeWeights, totalSum }) {
	const randomNum = Math.random() * totalSum;
	return binarySearch(cumulativeWeights, randomNum);
}

// Example usage
const weights = [1, 3];
const weightedPickerState = initialize(weights);
console.log(pickIndex(weightedPickerState)); // Log output to see the result
