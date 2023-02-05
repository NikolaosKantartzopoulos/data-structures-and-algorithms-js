const Stack = require("./Stack.js");

describe("Basic", () => {
	test("constructor", () => {
		let s = new Stack(1);
		expect(s.top.value).toEqual(1);
	});
	test("peek", () => {
		let s1 = new Stack(1).push(2).push(3);
		let top = s1.peek();
		expect(top.value).toBe(3);
	});
});

describe("Push", () => {
	test("toArray", () => {
		let s1 = new Stack(1).push(2).push(3);
		expect(s1.toArray()).toBe("3,2,1");
	});
	test("top", () => {
		let s1 = new Stack(1).push(2).push(3);
		expect(s1.top.value).toBe(3);
	});
});

describe("pop", () => {
	test("top", () => {
		let s1 = new Stack(1).push(2).push(3);
		s1.pop();
		expect(s1.top.value).toBe(2);
	});
});
