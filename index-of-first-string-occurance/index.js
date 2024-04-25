const strStr = function (haystack, needle) {
	if (needle === "") return 0; // Return 0 if needle is an empty string as per problem statement convention

	for (let i = 0; i <= haystack.length - needle.length; i++) {
		// Ensure the loop does not go past the point where needle can't fully fit
		if (haystack.slice(i, i + needle.length) === needle) {
			return i; // Return the index immediately on finding the first match
		}
	}
	return -1; // Return -1 if no match is found
};
