function convert(s, numRows) {
	if (numRows === 1 || numRows >= s.length) {
		return s;
	}

	let rows = new Array(Math.min(numRows, s.length)).fill("");
	let currentRow = 0;
	let goingDown = false;

	for (let char of s) {
		rows[currentRow] += char;
		// Determine if we need to go up or down
		if (currentRow === 0 || currentRow === numRows - 1) {
			goingDown = !goingDown;
		}
		currentRow += goingDown ? 1 : -1;
	}

	// Join all rows to form the final string
	return rows.join("");
}
