function hIndex(citations) {
	// Step 1: Sort the array in non-decreasing order
	citations.sort((a, b) => a - b);

	let n = citations.length;
	let maxHIndex = 0; // Initialize maxHIndex to track the highest valid h-index found

	// Step 2: Iterate from the end of the array to find the maximum h-index
	for (let i = n - 1; i >= 0; i--) {
		let numOfPapers = n - i; // Number of papers with citations >= citations[i]
		if (citations[i] >= numOfPapers) {
			// If the number of papers is at least the citation count
			maxHIndex = numOfPapers; // Update maxHIndex if current numOfPapers is valid
		}
	}

	// Return the maximum h-index found
	return maxHIndex;
}
