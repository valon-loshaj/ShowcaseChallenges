// getPurchases() --> API that returns the items purchased for a specified Person Array
// getFriends() --> API that returns the friends of a specified Person Array
const getFriends = require("./getFriends");
const getPurchases = require("./getPurchases");

// Rest of your code...

const FriendPurchases = function (person) {
	// retrieve root persons friends
	const friends = getFriends(person) || [];
	const friendPurchases = [];
	// loop through those friends and retrieve their purchases
	for (let friend of friends) {
		const purchases = getPurchases(friend);
		if (purchases) {
			friendPurchases.push(...purchases);
		}
	}
	// retrieve the root Persons items purchased
	const rootPurchases = new Set(getPurchases(person) || []);

	// filter the friend purchases to exclude any products included in the root purchases
	const filteredPurchases = friendPurchases.filter(
		(item) => !rootPurchases.has(item)
	);

	// use reduce to turn the items purchased into an object where the key is the item and the value is the number of times it appears in the array
	const counts = filteredPurchases.reduce((acc, val) => {
		acc[val] = (acc[val] || 0) + 1;
		return acc;
	}, {});

	// sort the array based on what appears most frequently
	const results = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

	// return a list of items that friends have purchased excluding items that the root person has purchased
	return results;
};

module.exports = FriendPurchases;

/*

	The space complexity of the solution is O(n), where n is the total number of purchases.
	This is because I'm are storing all the purchases in the friendPurchases and counts arrays, and the rootPurchases set.

	The has method of a Set has a time complexity of O(1), so the overall time complexity of the filter method is O(n), 
	where n is the number of friend purchases. The reduce and sort methods also have a time complexity of O(n). 
	Therefore, the overall time complexity of the solution is O(n).

*/
