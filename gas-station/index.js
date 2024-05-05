/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
	// track the total gas accumulated
	// track the total cost accumulated
	// track your starting position starting with index 0
	// track your tank (gas - cost)
	let totalGas = 0;
	let totalCost = 0;
	let start = 0;
	let tank = 0;

	// loop through gas and cost to aggregate the net tank from a complete loop
	for (let i = 0; i < gas.length; i++) {
		totalGas += gas[i];
		totalCost += cost[i];
		tank += gas[i] - cost[i];

		// if the tank ever drops below 0, increment the starting postion and reset the tank
		if (tank < 0) {
			start = i + 1;
			tank = 0;
		}
	}

	// check the total gas on the route is enough to make a complete loop
	if (totalGas < totalCost) {
		return -1;
	} else {
		return start;
	}
};
