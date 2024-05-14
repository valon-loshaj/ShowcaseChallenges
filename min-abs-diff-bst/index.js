/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = function (root) {
	let prev = null;
	let minDiff = Infinity;

	function inOrderTraverse(node) {
		if (node === null) return;

		// Traverse the left subtree
		inOrderTraverse(node.left);

		// Process the current node
		if (prev !== null) {
			// Update the minimum difference found so far
			minDiff = Math.min(minDiff, Math.abs(node.val - prev));
		}
		// Update the previous node to the current node's value
		prev = node.val;

		// Traverse the right subtree
		inOrderTraverse(node.right);
	}

	inOrderTraverse(root);
	return minDiff;
};
