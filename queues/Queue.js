const Node = require("./Node.js");

class Queue {
	constructor(value) {
		if (!value) {
			this.head = null;
			this.tail = null;
			this.length = 0;
		} else {
			let newNode = new Node(value);
			this.head = newNode;
			this.tail = newNode;
			this.length = 1;
		}
	}

	emptyQueue() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	toArray() {
		//Time complexity: O(n) - Space Complexity: O(n)
		let pointer = this.head;
		let arr = [];
		while (pointer) {
			arr.push(pointer.value);
			pointer = pointer.next;
		}
		return arr;
	}

	enqueue(value) {
		//Time complexity: O(1) - Space Complexity: O(1)
		if (!value) return undefined;
		let newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	dequeue() {
		//Time complexity: O(1) - Space Complexity: O(1)
		if (!this.length) return undefined;
		if (this.length == 1) {
			this.emptyQueue();
			return;
		}
		let pointer = this.head;
		this.head = this.head.next;
		this.length--;
		return pointer;
	}

	get(index) {
		//Time complexity: O(n) - Space Complexity: O(1)
		if (index < 0 || index >= this.length) return undefined;
		let pointer = this.head;
		for (let i = 0; i < index; i++) pointer = pointer.next;
		return pointer;
	}

	peek() {
		//Time complexity: O(1) - Space Complexity: O(1)
		return this.head.value;
	}
}

module.exports = Queue;
