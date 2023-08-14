function hash(val, setLength) {
  return val % setLength;
}

function createNode(val) {
  return {
    value: val,
    next: null,
  };
}

function appendNode(head, val) {
  let tail = getTail(head);
  let tempNode = new createNode(val);
  tail.next = tempNode;
}

function deleteNode(head, val) {
  let pointer = head;
  while (pointer) {
    if (pointer.next && pointer.next.value == val) {
      let temp = pointer.next;
      pointer.next = temp.next;
      temp.next = null;
      break;
    }
    pointer = pointer.next;
  }
}

function getTail(firstNode) {
  let pointer = firstNode;
  while (pointer.next) {
    pointer = pointer.next;
  }
  return pointer;
}

var MyHashSet = function () {
  this.hashSet = new Array(10).fill().map((e) => createNode(0));
};

MyHashSet.prototype.readIdx = function (idx) {
  let pointer = this.hashSet[idx];
  let arr = [];
  pointer = pointer.next;
  while (pointer) {
    arr.push(pointer.value);
    pointer = pointer.next;
  }
  return arr;
};

MyHashSet.prototype.add = function (key) {
  if (this.readIdx(hash(key, this.hashSet.length)).includes(key)) return;
  let idx = hash(key, this.hashSet.length);
  appendNode(this.hashSet[idx], key);
};

MyHashSet.prototype.remove = function (key) {
  let idx = hash(key, this.hashSet.length);
  deleteNode(this.hashSet[idx], key);
};

MyHashSet.prototype.contains = function (key) {
  return this.readIdx(hash(key, this.hashSet.length)).includes(key);
};

let a = new MyHashSet();
a.add(4);
a.add(44);
a.add(6);
a.add(66);
a.remove(4);
a.remove(66);
a.remove(77);
// a.readIdx(2);
// a.readIdx(4);
// a.readIdx(6);
a.contains(44);
a.contains(66);
