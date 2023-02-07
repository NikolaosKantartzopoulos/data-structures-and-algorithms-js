const Node = require("./Node");
const Queue = require("../queues/Queue");

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		//Time complexity: O(log(n)) - Space Complexity: O(n)
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
		//Time complexity: O(log(n)) - Space Complexity: O(n)
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
		//Time complexity: O(log(n)) - Space Complexity: O(n)
		if (this.root == null) return undefined;
		let pointer = this.root;
		while (pointer.left != null) {
			if (pointer.left) pointer = pointer.left;
		}
		return pointer.value;
	}

	bfs() {
		//Time complexity: O(|V| +|E|) - Space Complexity: O(|V|)
		//where |V| is the number of vertices and |E| is the number of edges
		if (this.root == null) return undefined;
		let pointer = this.root;
		let queue = new Queue();
		let results = [];
		queue.enqueue(pointer);
		while (queue.length > 0) {
			results.push(queue.peek().value);
			pointer = queue.peek();
			console.log(queue.toArray());
			if (pointer.left) queue.enqueue(pointer.left);
			if (pointer.right) queue.enqueue(pointer.right);
			pointer = queue.dequeue();
		}
		return results;
	}

	preOrder() {
		//Time complexity: O(|V| +|E|) - Space Complexity: O(|V|)
		//where |V| is the number of vertices and |E| is the number of edges
		if (this.root == null) return undefined;
		let queue = new Queue();
		function traverse(nodePointer) {
			queue.enqueue(nodePointer.value);
			if (nodePointer.left) traverse(nodePointer.left);
			if (nodePointer.right) traverse(nodePointer.right);
		}
		traverse(this.root);
		return queue.toArray();
	}

	postOrder() {
		//Time complexity: O(|V| +|E|) - Space Complexity: O(|V|)
		//where |V| is the number of vertices and |E| is the number of edges
		if (this.root == null) return undefined;
		let queue = new Queue();
		function traverse(nodePointer) {
			if (nodePointer.left) traverse(nodePointer.left);
			if (nodePointer.right) traverse(nodePointer.right);
			queue.enqueue(nodePointer.value);
		}
		traverse(this.root);
		return queue.toArray();
	}

	inOrder() {
		//Time complexity: O(|V| +|E|) - Space Complexity: O(|V|)
		//where |V| is the number of vertices and |E| is the number of edges
		if (this.root == null) return undefined;
		let queue = new Queue();
		function traverse(nodePointer) {
			if (nodePointer.left) traverse(nodePointer.left);
			queue.enqueue(nodePointer.value);
			if (nodePointer.right) traverse(nodePointer.right);
		}
		traverse(this.root);
		return queue.toArray();
	}
}

module.exports = BinarySearchTree;
