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
	test("orderedArray", () => {
		let bst = new BinarySearchTree();
		bst.insert(25);
		bst.insert(15);
		bst.insert(52);
		bst.insert(12);
		bst.insert(23);
		bst.insert(60);
		expect(bst.toOrderedArray()).toEqual([12]);
	});
});
