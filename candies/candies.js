/*
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

 

Example 1:

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

*/

const candy = function (ratings) {
	// ratings length
	const ratingsLength = ratings.length;
	// establish a new array filled with 1 candy per index
	const candies = new Array(ratingsLength).fill(1);

	// left to right traversal to determine if the child to the left of each index has a lower rating
	for (let i = 1; i < ratingsLength; i++) {
		if (ratings[i] > ratings[i - 1]) {
			candies[i] = candies[i - 1] + 1;
		}
	}

	// right to left traversal to determine if the child to the right of each index has a lower rating
	for (let j = ratingsLength - 2; j >= 0; j--) {
		if (ratings[j] > ratings[j + 1]) {
			candies[j] = Math.max(candies[j], candies[j + 1] + 1);
		}
	}

	// sum up the values within the candies array
	const minCandies = candies.reduce((a, b) => a + b);

	return minCandies;
};
