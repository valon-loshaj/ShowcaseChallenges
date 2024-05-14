const hasPathSum = function (root, targetSum) {
	if (!root) return false;

	const stack = [{ node: root, currentSum: root.val }];

	while (stack.length > 0) {
		const { node, currentSum } = stack.pop();

		// Check if the current node is a leaf and its path sum matches the targetSum
		if (!node.left && !node.right && currentSum === targetSum) {
			return true;
		}

		// Continue the path with the left child if it exists
		if (node.left) {
			stack.push({
				node: node.left,
				currentSum: currentSum + node.left.val,
			});
		}

		// Continue the path with the right child if it exists
		if (node.right) {
			stack.push({
				node: node.right,
				currentSum: currentSum + node.right.val,
			});
		}
	}

	return false; // Return false if no matching path is found
};
