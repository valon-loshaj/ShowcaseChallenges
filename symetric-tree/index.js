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
 * @return {boolean}
 */
const isSymmetric = function (root) {
	if (!root) return true;

	const queue = [[root.left, root.right]];

	while (queue.length > 0) {
		const [leftNode, rightNode] = queue.shift();

		if (!leftNode && !rightNode) continue; // Both nodes are null, symmetric so far, continue
		if (!leftNode || !rightNode || leftNode.val !== rightNode.val)
			return false; // Symmetry break

		// Enqueue children in mirrored pairs
		queue.push([leftNode.left, rightNode.right]);
		queue.push([leftNode.right, rightNode.left]);
	}

	return true; // Passed all checks, tree is symmetric
};

/* recursive solution
const isSymmetric = function(root) {
    return isMirror(root, root);
};

function isMirror(node1, node2) {
    if (node1 === null && node2 === null) return true;  // Both nodes are null
    if (node1 === null || node2 === null) return false; // One of the nodes is null, the other isn't

    // Check if the values of the nodes are the same and if the subtrees are mirrors of each other
    return (node1.val === node2.val) && 
           isMirror(node1.right, node2.left) && 
           isMirror(node1.left, node2.right);
}
*/
