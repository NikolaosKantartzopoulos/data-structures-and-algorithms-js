let DoublyLinkedList = require("./DoublyLinkedList");

// let threeNodeArray = new DoublyLinkedList(1).push(2).push(3)

describe("Constructor", () => {
	test("valid value - length", () => {
		let dll = new DoublyLinkedList(1);
		expect(dll.length).toBe(1);
	});
	test("valid value - head", () => {
		let dll = new DoublyLinkedList(1);
		expect(dll.head.value).toBe(1);
	});
});

describe("Push", () => {
	test("!value - length", () => {
		let dll = new DoublyLinkedList(1);
		let prevLength = dll.length;
		dll.push();
		let newLength = dll.length;
		expect(prevLength).toEqual(newLength);
	});
	test("push - head", () => {
		let dll = new DoublyLinkedList(1).push(2);
		expect(dll.head.value).toBe(1);
	});
	test("push - tail", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		expect(dll.tail.value).toBe(3);
	});
	test("push - length", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		expect(dll.length).toBe(3);
	});
});

describe("Pop", () => {
	test("pop - head", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.pop();
		expect(dll.head.next.value).toBe(2);
	});
	test("pop - tail", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.pop();
		expect(dll.tail.prev.value).toBe(1);
	});
	test("pop - length", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.pop();
		expect(dll.length).toBe(2);
	});
});

describe("Unshift", () => {
	test("unshift - head", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.unshift(10);
		expect(dll.head.value).toBe(10);
	});
	test("unshift - tail", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.unshift(10);
		expect(dll.tail.prev.value).toBe(2);
	});
	test("unshift - length", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.unshift(10);
		expect(dll.length).toBe(4);
	});
});

describe("Shift", () => {
	test("shift - head", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.shift();
		expect(dll.head.value).toBe(2);
	});
	test("shift - tail", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.shift();
		expect(dll.tail.prev.value).toBe(2);
	});
	test("shift - length", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.shift();
		expect(dll.length).toBe(2);
	});
});
