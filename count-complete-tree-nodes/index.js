/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function (root) {
	if (!root) return 0;

	let leftDepth = 0;
	let currentNode = root;
	while (currentNode.left !== null) {
		leftDepth++;
		currentNode = currentNode.left;
	}

	let rightDepth = 0;
	currentNode = root;
	while (currentNode.right !== null) {
		rightDepth++;
		currentNode = currentNode.right;
	}

	// If leftDepth equals rightDepth, the tree is a perfect binary tree
	if (leftDepth === rightDepth) {
		return (1 << (leftDepth + 1)) - 1; // 2^(leftDepth + 1) - 1
	}

	// Otherwise, use binary search on the last level
	return 1 + countNodes(root.left) + countNodes(root.right);
};
