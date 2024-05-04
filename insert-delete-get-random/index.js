class RandomizedSet {
	constructor() {
		this.masterSet = new Map();
	}

	/**
	 * @param {number} val
	 * @return {boolean}
	 */
	insert = function (val) {
		// Directly use has method to check presence and perform action accordingly
		if (!this.masterSet.has(val)) {
			this.masterSet.set(val, val);
			return true;
		}
		return false;
	};

	/**
	 * @param {number} val
	 * @return {boolean}
	 */
	remove = function (val) {
		// Directly use has method to check presence and perform action accordingly
		if (this.masterSet.has(val)) {
			this.masterSet.delete(val);
			return true;
		}
		return false;
	};

	/**
	 * @return {number}
	 */
	getRandom = function () {
		// This method still requires every call to convert map values to an array
		const values = Array.from(this.masterSet.values());
		const randomIndex = Math.floor(Math.random() * values.length);
		return values[randomIndex];
	};
}
