const Node = require("./Node.js");

class DoublyLinkedList {
	constructor(value) {
		if (!value) return undefined;

		let newNode = new Node(value);
		this.head = newNode;
		this.tail = newNode;
		this.length = 1;
	}

	printList() {
		let pointer = this.head;
		while (pointer.next) {
			console.log(pointer);
			pointer = pointer.next;
		}
	}

	push(value) {
		//Space complexity: O(1) - Time Complexity: O(1)
		if (!value) return;
		let newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		//Space complexity: O(1) - Time Complexity: O(1)
		if (this.length === 0) return;
		let pointer = this.tail.prev;
		this.tail.prev = null;
		this.tail = pointer;
		this.tail.next = null;
		this.length--;
	}

	unshift(value) {
		//Space complexity: O(1) - Time Complexity: O(1)
		let newNode = new Node(value);
		this.head.prev = newNode;
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}

	shift(value) {
		//Space complexity: O(1) - Time Complexity: O(1)
		if (this.length === 0) return;
		let newNode = new Node(value);
		let pointer = this.head;
		this.head = pointer.next;
		this.head.prev = null;
		pointer.next = null;
		this.length--;
	}
}

module.exports = DoublyLinkedList;
