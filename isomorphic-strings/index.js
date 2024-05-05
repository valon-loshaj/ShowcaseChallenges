/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
	if (s.length !== t.length) {
		return false;
	}

	const sToT = new Map(); // Map to track character mapping from s to t
	const tToS = new Map(); // Map to ensure no two characters in s map to the same character in t

	for (let i = 0; i < s.length; i++) {
		const sChar = s.charAt(i);
		const tChar = t.charAt(i);

		if (sToT.has(sChar)) {
			// Check if existing mapping matches current character in t
			if (sToT.get(sChar) !== tChar) {
				return false;
			}
		} else {
			// Ensure no two characters map to the same character
			if (tToS.has(tChar)) {
				return false;
			}
			sToT.set(sChar, tChar);
			tToS.set(tChar, sChar);
		}
	}

	return true;
};
