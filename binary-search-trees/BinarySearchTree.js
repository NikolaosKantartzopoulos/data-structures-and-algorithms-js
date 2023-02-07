const Node = require("./Node");
const Queue = require("../queues/Queue");
const Stack = require("../stacks/Stack");

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = new Node(value);
		if (this.root == null) {
			this.root = newNode;
			return;
		}
		let pointer = this.root;
		while (true) {
			if (newNode.value === pointer.value) return undefined;
			if (newNode.value < pointer.value) {
				if (pointer.left == null) {
					pointer.left = newNode;
					return this;
				}
				pointer = pointer.left;
			} else {
				if (newNode.value > pointer.value) {
					if (pointer.right == null) {
						pointer.right = newNode;
						return;
					}
					pointer = pointer.right;
				}
			}
		}
	}

	contains(value) {
		if (this.root == null) return false;
		let pointer = this.root;
		while (pointer) {
			if (value < pointer.value) {
				pointer = pointer.left;
			} else if (value > pointer.value) {
				pointer = pointer.right;
			} else {
				return true;
			}
		}
		return false;
	}

	minimumValue() {
		if (this.root == null) return undefined;
		let pointer = this.root;
		while (pointer.left != null) {
			if (pointer.left) pointer = pointer.left;
		}
		return pointer.value;
	}

	bfs() {
		if (this.root == null) return undefined;
		let pointer = this.root;
		let queue = new Queue();
		let results = [];
		queue.enqueue(pointer);
		while (queue.length > 0) {
			results.push(queue.peek().value);
			pointer = queue.peek();

			console.log("results:", results);

			if (pointer.left) queue.enqueue(pointer.left);
			if (pointer.right) queue.enqueue(pointer.right);
			pointer = queue.dequeue();
		}
		return results;
	}

	// toOrderedArray() {
	// 	if (this.root == null) return undefined;
	// 	let arr = [];
	// 	let pointer = this.root;
	// 	while (pointer.left != null) pointer = pointer.left;
	// 	if (pointer.right == null) {
	// 	}
	// 	arr.push(pointer.value);
	// 	arr.push();

	// 	console.log(arr);
	// 	return arr;
	// }
}

let bst = new BinarySearchTree();
bst.insert(25);
bst.insert(15);
bst.insert(52);
bst.insert(12);
bst.insert(23);
bst.insert(60);
bst.insert(48);
bst.bfs();

module.exports = BinarySearchTree;
