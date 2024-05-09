/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// iterative approach
const isSameTree = function (p, q) {
	let queue = [];
	queue.push([p, q]);

	while (queue.length > 0) {
		let [node1, node2] = queue.shift();

		if (node1 === null && node2 === null) {
			continue; // Both nodes are null, continue without doing anything
		}
		if (node1 === null || node2 === null) {
			return false; // One node is null, the other isn't
		}
		if (node1.val !== node2.val) {
			return false; // Nodes have different values
		}

		// Enqueue children of both nodes
		queue.push([node1.left, node2.left]);
		queue.push([node1.right, node2.right]);
	}

	return true; // No mismatches found, trees are the same
};

/* recursive solution
const isSameTree = function(p, q) {
    if (p === null && q === null) {
        // Both trees are empty
        return true;
    }
    if (p === null || q === null) {
        // One of the trees is empty
        return false;
    }
    if (p.val !== q.val) {
        // Values at the nodes differ
        return false;
    }
    // Recursively check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
*/
