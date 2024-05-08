const isIsomorphic = function (s, t) {
	if (s.length !== t.length) {
		return false; // Early exit if the strings have different lengths
	}

	const sToT = new Map();
	const tToS = new Map();

	for (let i = 0; i < s.length; i++) {
		const sChar = s.charAt(i);
		const tChar = t.charAt(i);

		// Check existing mappings
		if (
			(sToT.has(sChar) && sToT.get(sChar) !== tChar) ||
			(tToS.has(tChar) && tToS.get(tChar) !== sChar)
		) {
			return false; // Conflict in mappings, so not isomorphic
		}

		// Create mappings if not already present
		sToT.set(sChar, tChar);
		tToS.set(tChar, sChar);
	}

	return true; // If all checks pass, the strings are isomorphic
};
