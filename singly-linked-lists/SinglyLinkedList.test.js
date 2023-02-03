let SinglyLinkedList = require("./SinglyLinkedList");

describe("Basic tests", () => {
	test("Create List", () => {
		expect(new SinglyLinkedList(1).head.value).toBe(1);
	});
	test("Create empty List", () => {
		expect(new SinglyLinkedList().head).toBeNull();
	});
	test("Make empty", () => {
		let testList = new SinglyLinkedList(4);
		testList.emptyList();
		expect(testList.head).toBeNull();
	});
});

describe("Push", () => {
	test("head", () => {
		let list = new SinglyLinkedList(1);
		list.push(2);
		expect(list.head.value).toBe(1);
	});
	test("tail", () => {
		let list = new SinglyLinkedList(1);
		list.push(2);
		expect(list.tail.value).toBe(2);
	});
	test("length", () => {
		let list = new SinglyLinkedList(1);
		list.push(2);
		expect(list.length).toBe(2);
	});
});

describe("Push to empty list", () => {
	test("head.value", () => {
		let list = new SinglyLinkedList();
		list.push(1);
		expect(list.head.value).toBe(1);
	});
	test("tail.value", () => {
		let list = new SinglyLinkedList();
		list.push(1);
		expect(list.tail.value).toBe(1);
	});
	test("length", () => {
		let list = new SinglyLinkedList();
		list.push(1);
		expect(list.length).toBe(1);
	});
});

describe("Pop empty list", () => {
	test("head", () => {
		let l1 = new SinglyLinkedList();
		l1.pop();
		expect(l1.head).toBeNull();
	});
	test("head", () => {
		let l1 = new SinglyLinkedList();
		l1.pop();
		expect(l1.length).toBe(0);
	});
});

describe("Pop non empty list with 2 items", () => {
	test("head", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.pop();
		expect(l1.head.value).toBe(1);
	});
	test("tail", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.pop();
		expect(l1.tail.value).toBe(2);
	});
	test("length", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.pop();
		expect(l1.length).toBe(2);
	});
});

describe("Pop list with 1 item", () => {
	test("head", () => {
		let l1 = new SinglyLinkedList(1);
		l1.pop();
		expect(l1.head).toBeNull();
	});
	test("tail", () => {
		let l1 = new SinglyLinkedList(1);
		l1.pop();
		expect(l1.tail).toBeNull();
	});
	test("length", () => {
		let l1 = new SinglyLinkedList(1);
		l1.pop();
		expect(l1.length).toBe(0);
	});
});

describe("Unshift list with 0 items", () => {
	test("head", () => {
		let l1 = new SinglyLinkedList();
		l1.unshift(1);
		expect(l1.head.value).toBe(1);
	});
	test("tail", () => {
		let l1 = new SinglyLinkedList();
		l1.unshift(1);
		expect(l1.tail.value).toBe(1);
	});
	test("length", () => {
		let l1 = new SinglyLinkedList();
		l1.unshift(1);
		expect(l1.length).toBe(1);
	});
});

describe("Unshift list with 1+ items", () => {
	test("head", () => {
		let l1 = new SinglyLinkedList(1);
		l1.unshift(2);
		expect(l1.head.value).toBe(2);
	});
	test("tail", () => {
		let l1 = new SinglyLinkedList(1);
		l1.unshift(2);
		expect(l1.tail.value).toBe(1);
	});
	test("length", () => {
		let l1 = new SinglyLinkedList(1);
		l1.unshift(2);
		expect(l1.length).toBe(2);
	});
});

describe("Shift list with 0 items", () => {
	test("head", () => {
		let l1 = new SinglyLinkedList();
		l1.shift();
		expect(l1.head).toBeNull();
	});
	test("tail", () => {
		let l1 = new SinglyLinkedList();
		l1.shift();
		expect(l1.tail).toBeNull();
	});
	test("length", () => {
		let l1 = new SinglyLinkedList();
		l1.shift();
		expect(l1.length).toBe(0);
	});
});

describe("Shift list with 1 item", () => {
	test("head", () => {
		let l1 = new SinglyLinkedList(1);
		l1.shift();
		expect(l1.head).toBeNull();
	});
	test("tail", () => {
		let l1 = new SinglyLinkedList(1);
		l1.shift();
		expect(l1.tail).toBeNull();
	});
	test("length", () => {
		let l1 = new SinglyLinkedList(1);
		l1.shift();
		expect(l1.length).toBe(0);
	});
});

describe("Shift list with 2+ items", () => {
	test("head", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.shift();
		expect(l1.head.value).toBe(2);
	});
	test("tail", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.shift();
		expect(l1.tail.value).toBe(3);
	});
	test("length", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.shift();
		expect(l1.length).toBe(2);
	});
});

describe("Get node edge cases", () => {
	test("Index < 0", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		let negativeIndex = l1.get(-1);
		expect(negativeIndex).toBeUndefined();
	});
	test("Index > length", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		expect(l1.get(3)).toBeUndefined();
	});
	test("Empty Linked List", () => {
		let l1 = new SinglyLinkedList();
		expect(l1.get(0)).toBeUndefined();
	});
	test("index w/o value", () => {
		let l1 = new SinglyLinkedList();
		expect(l1.get()).toBeUndefined();
	});
});

describe("Get node", () => {
	test("Index 0", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		expect(l1.get(0).value).toBe(1);
	});
	test("Index 1", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		expect(l1.get(1).value).toBe(2);
	});
	test("Index 2", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		expect(l1.get(2).value).toBe(3);
	});
});

describe("Set node edge cases", () => {
	test("Index < 0", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		let negativeIndex = l1.set(-1);
		expect(negativeIndex).toBeUndefined();
	});
	test("Index > length", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		let index = l1.set(3);
		expect(index).toBeUndefined();
	});
	test("Empty Linked List", () => {
		let l1 = new SinglyLinkedList();
		let index = l1.set(0);
		expect(index).toBeUndefined();
	});
	test("index w/o value", () => {
		let l1 = new SinglyLinkedList();
		let index = l1.set();
		expect(index).toBeUndefined();
	});
});

describe("Set node", () => {
	test("head", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.set(0, 10);
		expect(l1.head.value).toBe(10);
	});
	test("Index 0", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.set(0, 10);
		expect(l1.get(0).value).toBe(10);
	});
	test("Index 1", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.set(1, 20);
		expect(l1.get(1).value).toBe(20);
	});
	test("Index 2", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.set(2, 30);
		expect(l1.get(2).value).toBe(30);
	});
	test("tail", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.set(2, 99);
		expect(l1.tail.value).toBe(99);
	});
});

describe("Insert node edge cases", () => {
	test("0 items head", () => {
		let l1 = new SinglyLinkedList();
		l1.insert(0, 4);
		expect(l1.head.value).toBe(4);
	});
	test("0 items tail", () => {
		let l1 = new SinglyLinkedList();
		l1.insert(0, 4);
		expect(l1.tail.value).toBe(4);
	});
	test("0 items length", () => {
		let l1 = new SinglyLinkedList();
		l1.insert(0, 4);
		expect(l1.length).toBe(1);
	});
});

describe("Insert node", () => {
	test("node inserted", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.insert(1, 10);
		expect(l1.get(1).value).toBe(10);
	});
	test("next node", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.insert(1, 10);
		expect(l1.get(2).value).toBe(2);
	});
	test("last node", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.insert(1, 10);
		expect(l1.get(3).value).toBe(3);
	});
	test("tail", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.insert(1, 10);
		expect(l1.tail.value).toBe(3);
	});
	test("length", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.insert(1, 10);
		expect(l1.length).toBe(4);
	});
});

describe("Remove node", () => {
	test("node return", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.remove(1);
		expect(l1.get(1).value).toBe(3);
	});
	test("remove first", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		l1.remove(0);
		expect(l1.head.value).toBe(2);
	});
	test("node return empty list, check head", () => {
		let l1 = new SinglyLinkedList(1);
		l1.remove(0);
		expect(l1.head).toBeNull();
	});
	test("node return empty list,check tail", () => {
		let l1 = new SinglyLinkedList(1);
		l1.remove(0);
		expect(l1.tail).toBeNull();
	});
	test("out of lower bound", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		expect(l1.remove(-1)).toBeUndefined();
	});
	test("out of upper bound", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		expect(l1.remove(3)).toBeUndefined();
	});
});

describe("Reverse", () => {
	test("head", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		expect(l1.reverse().head.value).toBe(3);
	});
	test("tail", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		expect(l1.reverse().tail.value).toBe(1);
	});
	test("tail next", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		expect(l1.reverse().tail.next).toBeNull();
	});
	test("head next value", () => {
		let l1 = new SinglyLinkedList(1).push(2).push(3);
		expect(l1.reverse().head.next.value).toBe(2);
	});
});
