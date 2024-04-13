const getPurchases = (person) => {
	// Mock response
	return person === "friend1" ? ["item1", "item2"] : ["item3", "item4"];
};

module.exports = getPurchases;
