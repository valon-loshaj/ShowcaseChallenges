/*
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

 

Example 1:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
*/

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
