const Node = require("./Node");

class Stack {
	constructor(value) {
		let newNode = new Node(value);
		this.top = newNode;
		this.length = 1;
	}

	toArray() {
		let pointer = this.top;
		let arr = [];
		while (pointer) {
			arr.push(pointer.value);
			pointer = pointer.next;
		}
		console.log(arr.join(","));
		return arr.join(",");
	}

	peek() {
		//Time complexity: O(1) - Space Complexity: O(1)
		return this.top;
	}

	emptyStack() {
		this.top = null;
		this.length = 0;
	}

	push(value) {
		//Time complexity: O(1) - Space Complexity: O(1)
		if (!value) return undefined;
		let newNode = new Node(value);
		newNode.next = this.top;
		this.top = newNode;
		this.length++;
		return this;
	}

	pop() {
		//Time complexity: O(1) - Space Complexity: O(1)
		let pointer = this.top;
		this.top = pointer.next;
		pointer.next = null;
	}
	//If we were to add Shift or Unshift methods,
	//Time and space complexities would be
	//Time complexity: O(n) - Space Complexity: O(n)
}

module.exports = Stack;
