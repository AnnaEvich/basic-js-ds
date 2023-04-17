const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree
{
    rootNode = null

    addInsideRecursive(node, data) {
        if (!node) {
            return new Node(data)
        }

        if (node.data === data) {
            return node
        }

        data < node.data ? node.left = this.addInsideRecursive(node.left, data) : node.right = this.addInsideRecursive(node.right, data)

        return node
    }

    searchInsideRecursive(node, data) {
        if (!node) {
            return false
        }

        if (node.data === data) {
            return true
        }

        return data < node.data ? this.searchInsideRecursive(node.left, data) : this.searchInsideRecursive(node.right, data)
    }

    findInsideRecursive(node, data) {
        if (!node) {
            return null
        }

        if (node.data === data) {
            return node
        }

        return data < node.data ? this.findInsideRecursive(node.left, data) : this.findInsideRecursive(node.right, data)
    }

    removeInsideRecursive(node, data) {
        if (!node) {
            return null
        }

        if (data < node.data) {
            node.left = this.removeInsideRecursive(node.left, data)
            return node
        } else if (data > node.data) {
            node.right = this.removeInsideRecursive(node.right, data)
            return node
        } else {
            if (!node.left && !node.right) {
                return null
            }

            if (!node.left) {
                node = node.right

                return node
            }

            if (!node.right) {
                node = node.left

                return node
            }

            let minFromRight = node.right
            while (minFromRight.left) {
                minFromRight = minFromRight.left
            }
            node.data = minFromRight.data

            node.right = this.removeInsideRecursive(node.right, minFromRight.data)

            return node
        }
    }

    add(data) {
        this.rootNode = this.addInsideRecursive(this.rootNode, data)
    }

    has(data) {
        return this.searchInsideRecursive(this.rootNode, data)
    }

    find(data) {
        return this.findInsideRecursive(this.rootNode, data)
    }

    remove(data) {
        this.rootNode = this.removeInsideRecursive(this.rootNode, data)
    }

    min() {
        if (!this.rootNode) {
            return
        }

        let node = this.rootNode

        while (node.left) {
            node = node.left
        }

        return node.data
    }

    max() {
        if (!this.rootNode) {
            return
        }

        let node = this.rootNode

        while (node.right) {
            node = node.right
        }

        return node.data
    }

    root() {
        return this.rootNode
    }
}

module.exports = {
    BinarySearchTree
};