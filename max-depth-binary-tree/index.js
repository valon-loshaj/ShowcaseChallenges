// iterative approach
function maxDepth(root) {
	if (!root) return 0;

	let queue = [{ node: root, depth: 1 }];
	let maxDepth = 0;

	while (queue.length > 0) {
		let { node, depth } = queue.shift(); // Dequeue the front element
		maxDepth = Math.max(maxDepth, depth); // Update the max depth

		// Enqueue left child if it exists
		if (node.left) {
			queue.push({ node: node.left, depth: depth + 1 });
		}

		// Enqueue right child if it exists
		if (node.right) {
			queue.push({ node: node.right, depth: depth + 1 });
		}
	}

	return maxDepth;
}

/* recursive approach
const maxDepth = function (root) {
	// using a recursive approach
	// check if the root is null, return 0 if it is
	if (root === null) {
		return 0;
	} else {
		// recursively call maxDepth for left and right
		let leftDepth = maxDepth(root.left);
		let rightDepth = maxDepth(root.right);
		// return the maximum value of left and right
		return Math.max(leftDepth, rightDepth) + 1;
	}
};
*/
