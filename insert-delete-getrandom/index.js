class RandomizedSet {
	constructor() {
		this.randomizedSet = {};
	}

	insert(val) {
		if (this.randomizedSet[val]) {
			return false; // Indicate failure if the value already exists
		}
		this.randomizedSet[val] = val;
		return true; // Indicate success
	}

	remove(val) {
		if (!this.randomizedSet[val]) {
			return false; // Indicate failure if the value doesn't exist
		}
		delete this.randomizedSet[val];
		return true; // Indicate success
	}

	getRandom() {
		const keys = Object.keys(this.randomizedSet);
		if (keys.length === 0) {
			return null; // Handle the case when there are no elements
		}
		const randomIndex = Math.floor(Math.random() * keys.length);
		return this.randomizedSet[keys[randomIndex]];
	}
}
