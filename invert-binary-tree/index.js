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
 * @return {TreeNode}
 */
// iterative solution
const invertTree = function (root) {
	if (!root) return root; // If the root is null, just return it.

	const queue = [root]; // Start with the root node in the queue.
	while (queue.length > 0) {
		const current = queue.shift(); // Remove and get the first node in the queue.

		// Swap the left and right children
		const temp = current.left;
		current.left = current.right;
		current.right = temp;

		// Enqueue the children to process them in subsequent iterations
		if (current.left) queue.push(current.left);
		if (current.right) queue.push(current.right);
	}

	return root; // Return the modified tree root.
};

/* recursive solution
const invertTree = function(root) {
    if (root === null) {
        // Base case: if the current node is null, just return null
        return null;
    }

    // Swap the left and right children
    [root.left, root.right] = [root.right, root.left];

    // Recursively invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root;  // Return the root of the inverted tree
};
*/
