/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
	// Helper function to construct BST recursively
	function constructBST(left, right) {
		if (left > right) {
			return null; // Base case: no elements to include in the tree
		}
		// Middle element to maintain the balance
		let mid = Math.floor((left + right) / 2);
		// Create a new tree node with the middle element
		let node = new TreeNode(nums[mid]);
		// Recursively build the left and right subtree
		node.left = constructBST(left, mid - 1);
		node.right = constructBST(mid + 1, right);
		return node;
	}

	// Initial call to the helper function with the full range of the array
	return constructBST(0, nums.length - 1);
};
