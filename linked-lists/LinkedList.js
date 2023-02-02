let Node = require("./Node.js");

class LinkedList {
	constructor(value) {
		if (!value) {
			this.head = null;
			this.tail = null;
			this.length = 0;
		} else {
			const newNode = new Node(value);
			this.head = newNode;
			this.tail = newNode;
			this.length = 1;
		}
	}

	printList() {
		let pointer = this.head;
		while (pointer != null) {
			console.log(pointer);
			pointer = pointer.next;
		}
	}

	getHead() {
		if (this.head === null) {
			console.log("Head: null");
			return null;
		} else {
			console.log("Head: " + this.head.value);
			return this.head;
		}
	}

	getTail() {
		if (this.tail === null) {
			console.log("Tail: null");
			return null;
		} else {
			console.log("Tail: " + this.tail.value);
			return this.tail;
		}
	}

	getLength() {
		console.log("Length: " + this.length);
		return this.length;
	}

	emptyList() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		//time O(1) - space O(1)
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		//time O(n) - space O(1)
		if (!this.head) {
			console.log("Error: Can not pop an empty list");
			return undefined;
		} else if (this.length == 1) {
			this.emptyList();
			return;
		} else {
			let pointer = this.head;
			while (pointer.next.next) {
				pointer = pointer.next;
				console.log(pointer);
			}
			this.tail = pointer;
			this.tail.next = null;
			this.length--;
			return this;
		}
	}

	unshift(value) {
		//time O(1) - space O(1)
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			this.length = 1;
		} else {
			newNode.next = this.head.next;
			this.head = newNode;
			this.length++;
		}
		return this;
	}

	shift() {
		//time O(1) - space O(1)
		if (!this.head || this.length === 1) return this.emptyList();
		let temp = this.head;
		this.head = temp.next;
		temp.next = null;
		this.length--;
		return this;
	}

	get(index) {
		//time O(n) - space O(1)
		if (index < 0 || index >= this.length || index == null) return undefined;
		let pointer = this.head;
		for (let i = 0; i < index; i++) {
			pointer = pointer.next;
		}
		return pointer;
	}

	set(index, newValue) {
		//time O(n) - space O(1)
		if (index < 0 || index >= this.length || index == null) return undefined;
		let pointer = this.head;
		for (let i = 0; i < index; i++) {
			pointer = pointer.next;
		}
		pointer.value = newValue;
		return pointer.value;
	}

	insert(index, newValue) {
		//time O(n) - space O(1)
		if (index < 0 || index > this.length) return undefined;
		if (!this.head) return this.push(newValue);
		if (index === 0) return this.unshift(newValue);

		let newNode = new Node(newValue);
		let prev = this.get(index - 1);
		let currentNode = this.get(index);
		prev.next = newNode;
		newNode.next = currentNode;
		this.length++;
		return true;
	}

	remove(index) {
		//time O(n) - space O(1)
		if (index < 0 || index >= this.length || !this.head) return undefined;
		if (index === 0) return this.shift();
		if (this.length === 1) return this.emptyList();
		let pointer = this.get(index);
		let prev = this.get(index - 1);

		prev.next = pointer.next;
		pointer.next = null;
		return pointer;
	}

	reverse() {
		//time O(n) - space O(1)
		if (this.length == null) return null;
		let pointer = this.head;
		this.head = this.tail;
		this.tail = pointer;
		let pointerNext = pointer.next;
		let pointerPrev = null;
		this.tail.next = null;

		for (let i = 0; i < this.length - 1; i++) {
			pointerPrev = pointer;
			pointer = pointerNext;
			pointerNext = pointer.next;
			pointer.next = pointerPrev;
		}

		return this;
	}
}
module.exports = LinkedList;
