const FriendPurchases = require("./index");
const getFriends = require("./getFriends");
const getPurchases = require("./getPurchases");

jest.mock("./getFriends");
jest.mock("./getPurchases");

test("returns correct purchases for base case", () => {
	getFriends.mockReturnValue(["friend1", "friend2", "friend3"]);
	getPurchases.mockImplementation((person) => {
		if (person === "friend1") {
			return ["item1", "item2"];
		} else if (person === "friend2") {
			return ["item3", "item4"];
		} else if (person === "friend3") {
			return ["item1", "item3"];
		} else {
			return ["item1", "item2", "item3", "item4"];
		}
	});
	expect(FriendPurchases("person")).toEqual([
		"item1",
		"item3",
		"item2",
		"item4",
	]);
});

test("returns empty array when person has no friends", () => {
	getFriends.mockReturnValue([]);
	expect(FriendPurchases("person")).toEqual([]);
});

test("returns empty array when friends have made no purchases", () => {
	getPurchases.mockReturnValue([]);
	expect(FriendPurchases("person")).toEqual([]);
});
