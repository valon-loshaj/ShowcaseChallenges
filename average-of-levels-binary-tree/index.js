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
 * @return {number[]}
 */
const averageOfLevels = function (root) {
	if (!root) return [];

	const queue = [root];
	const results = [];

	while (queue.length > 0) {
		let levelLength = queue.length;
		let levelSum = 0;

		for (let i = 0; i < levelLength; ++i) {
			let currentNode = queue.shift();
			levelSum += currentNode.val;

			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}

		// Calculate the average for this level
		results.push(levelSum / levelLength);
	}

	return results;
};
