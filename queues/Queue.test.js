const Queue = require("./Queue.js");

describe("Queue", () => {
	test("enqueue", () => {
		let q = new Queue(1);
		q.enqueue(2);
		q.enqueue(3);
		expect(q.toArray()).toEqual([1, 2, 3]);
	});
	test("enqueue", () => {
		let q = new Queue(1).enqueue(2).enqueue(3);
		expect(q.toArray()).toEqual([1, 2, 3]);
	});
	test("dequeue - toArray", () => {
		let q = new Queue(1).enqueue(2).enqueue(3);
		q.dequeue();
		expect(q.toArray()).toEqual([2, 3]);
	});
	test("dequeue", () => {
		let q = new Queue(1).enqueue(2).enqueue(3);
		expect(q.dequeue().value).toEqual(1);
	});
	test("dequeue - length", () => {
		let q = new Queue(1).enqueue(2).enqueue(3);
		q.dequeue();
		expect(q.length).toEqual(2);
	});
	test("dequeue - length 1 queue", () => {
		let q = new Queue(1);
		q.dequeue();
		expect(q.head).toBeNull();
	});
	test("get(0)", () => {
		let q = new Queue(1).enqueue(2).enqueue(3);
		expect(q.get(0).value).toEqual(1);
	});
	test("get(-1)", () => {
		let q = new Queue(1).enqueue(2).enqueue(3);
		expect(q.get(-1)).toBeUndefined();
	});
	test("get() > length", () => {
		let q = new Queue(1).enqueue(2).enqueue(3);
		expect(q.get(3)).toBeUndefined();
	});
	test("get() regular", () => {
		let q = new Queue(1).enqueue(2).enqueue(3);
		expect(q.get(1).value).toEqual(2);
	});
	test("peek()", () => {
		let q = new Queue(1).enqueue(2).enqueue(3);
		expect(q.peek()).toEqual(1);
	});
});
