/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
	const lines = [];
	let currentLine = [];
	let numberOfLetters = 0;

	words.forEach((word) => {
		// Check if adding this word would exceed the maxWidth
		if (numberOfLetters + word.length + currentLine.length > maxWidth) {
			// Time to justify the current line
			let line = "";
			if (currentLine.length === 1) {
				// Special case: the line is one word long
				line = currentLine[0] + " ".repeat(maxWidth - numberOfLetters);
			} else {
				// Calculate basic number of spaces needed
				const totalSpaces = maxWidth - numberOfLetters;
				const spaceBetweenWords = Math.floor(
					totalSpaces / (currentLine.length - 1)
				);
				const extraSpaces = totalSpaces % (currentLine.length - 1);

				// Build the line with extra spaces added to the first few gaps
				currentLine.forEach((word, index) => {
					if (index < currentLine.length - 1) {
						// not the last word
						const spacesToAdd =
							spaceBetweenWords + (index < extraSpaces ? 1 : 0);
						line += word + " ".repeat(spacesToAdd);
					} else {
						line += word; // last word in the line
					}
				});
			}
			lines.push(line);
			currentLine = [];
			numberOfLetters = 0;
		}
		// Add the current word to the line
		currentLine.push(word);
		numberOfLetters += word.length;
	});

	// Handle the last line
	let lastLine =
		currentLine.join(" ") +
		" ".repeat(maxWidth - numberOfLetters - (currentLine.length - 1));
	lines.push(lastLine);

	return lines;
}

/*
words = [this, is, an ,example]
maxWidth = 7
0 | 1 | 2 | 3 | 4 | 5 | 6 |
T | h | i | s |   | i | s |
a | n |   |   |   |   |   |
e | x | a | m | p | l | e |
*/
