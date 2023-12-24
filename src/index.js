class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.father = null;
    }

    root() {
        return this.father;
    }

    add(data) {
        this.father = addWithin(this.father, data);

        function addWithin(node, value) {
            if (!node) {
                return new Node(value);
            }

            if (node.data < value) {
                node.right = addWithin(node.right, value);
            } else {
                node.left = addWithin(node.left, value);
            }

            return node;
        }
    }

    has(data) {
        return hasValue(this.father, data)

        function hasValue(node, value) {
            if (!node) {
                return false;
            }

            if (node.data === value) {
                return true;
            }

            if (node.data > value) {
                return hasValue(node.left, value);
            } else {
                return hasValue(node.right, value);
            }
        }
    }

    find(data) {
        return findData(this.father, data);

        function findData(node, value) {
            if (!node) {
                return null;
            }

            if (node.data === value) {
                return node;
            }

            if (node.data > value) {
                return findData(node.left, value);
            } else {
                return findData(node.right, value);
            }
        }
    }

    remove(data) {
        this.father = removeItem(this.father, data);

        function removeItem(node, value) {
            if (!node) {
                return null;
            }

            if (value < node.data) {
                node.left = removeItem(node.left, value);
                return node;
            } else if (value > node.data) {
                node.right = removeItem(node.right, value);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }
                if (!node.left) {
                    node = node.right;
                    return node;
                }
                if (!node.right) {
                    node = node.left;
                    return node;
                }

                let minFromRight = node.right;
                while (minFromRight.left) {
                    minFromRight = minFromRight.left;
                }
                node.data = minFromRight.data;
                node.right = removeItem(node.right, minFromRight.data);
                return node;
            }
        }
    }

    min() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    max() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
}

let l = new BinarySearchTree();
l.add(3);
l.add(7);
l.add(1);
l.add(4);
l.add(5);
l.add(6);
l.add(2);
console.log(l.remove(7));

console.log(l.has(7));
console.log(l.root());