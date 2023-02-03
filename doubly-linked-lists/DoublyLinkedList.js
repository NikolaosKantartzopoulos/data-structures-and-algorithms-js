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
		let temp = this.head;
		while (temp !== null) {
			console.log(temp.value);
			temp = temp.next;
		}
	}

	emptyList() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		//Time complexity: O(1) - Space Complexity: O(1)
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
		//Time complexity: O(1) - Space Complexity: O(1)
		if (this.length === 0) return undefined;
		let pointer = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = pointer.prev;
			this.tail.next = null;
			pointer.prev = null;
		}
		this.length--;
		return pointer;
	}

	unshift(value) {
		//Time complexity: O(1) - Space Complexity: O(1)
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	shift() {
		//Time complexity: O(1) - Space Complexity: O(1)
		if (this.length === 0) return;
		if (this.length === 1) {
			this.emptyList();
		}
		let pointer = this.head;
		this.head = pointer.next;
		this.head.prev = null;
		pointer.next = null;
		this.length--;
		return pointer;
	}

	get(index) {
		//Time complexity: O(n) - Space Complexity: O(1)
		if (index < 0 || index >= this.length) return undefined;
		let pointer = this.head;
		for (let i = 0; i != index; i++) {
			pointer = pointer.next;
		}
		return pointer;
	}

	set(index, newValue) {
		//get() method time complexity is O(n), so...
		//Time complexity: O(n) - Space Complexity: O(1)
		if (index < 0 || index >= this.length) return undefined;
		let pointer = this.get(index);
		pointer.value = newValue;
		return pointer;
	}

	insert(index, newValue) {
		if (index === 0) return this.unshift(newValue);
		if (index < 0 || index > this.length) return undefined;
		if (index === this.length) return this.push(newValue);
		let newNode = new Node(newValue);

		let InitialNodeAtIndex = this.get(index);
		let prevNodeAtIndex = this.get(index - 1);
		prevNodeAtIndex.next = newNode;
		newNode.prev = prevNodeAtIndex;
		newNode.next = InitialNodeAtIndex;
		InitialNodeAtIndex.prev = newNode;
		this.length++;
		return true;
	}

	remove(index) {
		//get() method time complexity is O(n), so...
		//Time complexity: O(n) - Space Complexity: O(1)
		if (index < 0 || index > this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length) return this.pop();

		let pointer = this.get(index);
		let previousNode = this.get(index - 1);
		let nextNode = this.get(index + 1);
		previousNode.next = nextNode;
		nextNode.prev = previousNode;
		pointer.next = null;
		pointer.prev = null;
		this.length--;
		return pointer;
	}
}

module.exports = DoublyLinkedList;
