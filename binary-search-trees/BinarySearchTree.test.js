const BinarySearchTree = require("./BinarySearchTree.js");

describe("Basic", () => {
	test("contains - true", () => {
		let bst = new BinarySearchTree();
		bst.insert(5);
		bst.insert(15);
		bst.insert(52);
		bst.insert(12);
		bst.insert(23);
		bst.insert(6);
		expect(bst.contains(5)).toBeTruthy();
	});
	test("contains - false", () => {
		let bst = new BinarySearchTree();
		bst.insert(5);
		bst.insert(15);
		bst.insert(52);
		bst.insert(12);
		bst.insert(23);
		bst.insert(6);
		expect(bst.contains(2)).toBeFalsy();
	});
	test("minimum Value", () => {
		let bst = new BinarySearchTree();
		bst.insert(25);
		bst.insert(15);
		bst.insert(52);
		bst.insert(12);
		bst.insert(23);
		bst.insert(6);
		expect(bst.minimumValue()).toBe(6);
	});
	test("minimum Value 2", () => {
		let bst = new BinarySearchTree();
		bst.insert(25);
		bst.insert(15);
		bst.insert(52);
		bst.insert(12);
		bst.insert(23);
		bst.insert(60);
		expect(bst.minimumValue()).toBe(12);
	});
	test("Breadth first search", () => {
		let bst = new BinarySearchTree();
		bst.insert(4);
		bst.insert(2);
		bst.insert(1);
		bst.insert(3);
		bst.insert(6);
		bst.insert(5);
		bst.insert(7);
		expect(bst.bfs()).toEqual([4, 2, 6, 1, 3, 5, 7]);
	});

	test("Depth first - preOrder", () => {
		let bst = new BinarySearchTree();
		bst.insert(4);
		bst.insert(2);
		bst.insert(1);
		bst.insert(3);
		bst.insert(6);
		bst.insert(5);
		bst.insert(7);
		expect(bst.preOrder()).toEqual([4, 2, 1, 3, 6, 5, 7]);
	});

	test("Depth first - postOrder", () => {
		let bst = new BinarySearchTree();
		bst.insert(4);
		bst.insert(2);
		bst.insert(1);
		bst.insert(3);
		bst.insert(6);
		bst.insert(5);
		bst.insert(7);
		expect(bst.postOrder()).toEqual([1, 3, 2, 5, 7, 6, 4]);
	});

	test("Depth first - inOrder", () => {
		let bst = new BinarySearchTree();
		bst.insert(4);
		bst.insert(2);
		bst.insert(1);
		bst.insert(3);
		bst.insert(6);
		bst.insert(5);
		bst.insert(7);
		expect(bst.inOrder()).toEqual([1, 2, 3, 4, 5, 6, 7]);
	});
});
