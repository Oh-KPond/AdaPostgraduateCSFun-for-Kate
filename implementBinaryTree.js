class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(data){
        let node = new Node(data)

        if (this.root == null){
            this.root = node
            return this
        } 
        let current = this.root
        while(true){
            if (node.data == current.data) {
                return "can not insert duplicate"
            }
            if (node.data < current.data){
                if (current.left == null){
                    current.left = node
                    return this
                } 
                current = current.left
                
            }
            if (node.data > current.data){
                if(current.right == null){
                    current.right = node
                    return this
                } 
                current = current.right
            }
        }
    }

    find(data){
        if (this.root == null) return false

        let current = this.root
        let found = false

        while(!found && current){
            if (current.data == data){
                found = true
                return current
            }

            if(data < current.data){
                current = current.left
            }

            if(data > current.data){
                current = current.right
            }
        }

        if (!found){
            return "node not found"
        }
    }
}
let tree = new BinarySearchTree()
console.log(tree)

console.log(tree.insert(10))
console.log(tree.insert(5))
console.log(tree.insert(13))
console.log(tree.insert(11))
console.log(tree.insert(2))
console.log(tree.insert(16))
console.log(tree.insert(7))
console.log(tree.insert(5))
console.log(tree.find(8))

