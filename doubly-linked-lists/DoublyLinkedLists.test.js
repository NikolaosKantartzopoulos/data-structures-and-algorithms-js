let DoublyLinkedList = require("./DoublyLinkedList");

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
	test("head", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.pop();
		expect(dll.head.next.value).toBe(2);
	});
	test("tail", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.pop();
		expect(dll.tail.prev.value).toBe(1);
	});
	test("length", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.pop();
		expect(dll.length).toBe(2);
	});
	test("if 1 item - head", () => {
		let dll = new DoublyLinkedList(1);
		dll.pop();
		expect(dll.head).toBeNull();
	});
	test("if 1 item - tail", () => {
		let dll = new DoublyLinkedList(1);
		dll.pop();
		expect(dll.tail).toBeNull();
	});
	test("if 1 item - return", () => {
		let dll = new DoublyLinkedList(1);
		expect(dll.pop().value).toBe(1);
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

describe("Get", () => {
	test("get(-1)", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		expect(dll.get(-1)).toBeUndefined();
	});
	test("get - index > length", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		expect(dll.get(3)).toBeUndefined();
	});
	test("get", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		expect(dll.get(1).value).toBe(2);
	});
});

describe("Set", () => {
	test("set", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		expect(dll.set(1, 20).value).toBe(20);
	});
});

describe("Insert", () => {
	test("index < 0", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		expect(dll.insert(-1, 20)).toBeUndefined();
	});
	test("index > length", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		expect(dll.insert(4, 40)).toBeUndefined();
	});
	test("head", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.insert(1, 1.5);
		expect(dll.head.value).toBe(1);
	});
	test("prev", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.insert(1, 1.5);
		expect(dll.get(1).prev.value).toBe(1);
	});
	test("inserted", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.insert(1, 1.5);
		expect(dll.get(1).value).toBe(1.5);
	});
	test("next", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.insert(1, 1.5);
		expect(dll.get(2).value).toBe(2);
	});
	test("with 0 nodes", () => {
		let dll = new DoublyLinkedList(1);
		dll.pop();
		dll.insert(0, 1.5);
		expect(dll.head.value).toBe(1.5);
	});
	test("at end", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.insert(3, 3.5);
		expect(dll.tail.value).toBe(3.5);
	});
	test("at end 2", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.insert(3, 3.5);
		expect(dll.get(3).value).toBe(3.5);
	});
});

describe("Remove", () => {
	test("head", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.remove(1);
		expect(dll.head.value).toBe(1);
	});
	test("previous", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.remove(1);
		expect(dll.get(0).value).toBe(1);
	});
	test("next", () => {
		let dll = new DoublyLinkedList(1).push(2).push(3);
		dll.remove(1);
		expect(dll.get(1).value).toBe(3);
	});
});
