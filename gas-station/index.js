function canCompleteCircuit(gas, cost) {
	let totalGas = 0;
	let totalCost = 0;
	let start = 0;
	let tank = 0;

	for (let i = 0; i < gas.length; i++) {
		// aggregate the total tank at each index
		totalGas += gas[i];
		totalCost += cost[i];
		tank += gas[i] - cost[i];

		// If tank is negative, reset the start index to the next station
		if (tank < 0) {
			start = i + 1;
			tank = 0;
		}
	}

	// Check if the total gas is enough to cover the total cost
	if (totalGas < totalCost) {
		return -1;
	} else {
		return start;
	}
}
