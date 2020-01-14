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

        let cont = true
        while(cont){
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
    // TODO: Find is not working if there is only one node in the tree
    // find(data){
    //     let current = this.root
    //     let found = false

    //     if (current == null){
    //         return false
    //     } 

    //     while(!found && current){

    //         if (current.data == data){
    //             found = true
    //             return current
    //         }

    //         if(data < current.data){
    //             current = current.left
    //         }

    //         if(data > current.data){
    //             current = current.right
    //         }
    //     }

    //     if (!found){
    //         return "node not found"
    //     }
    // }

    bfs(){
        let data = []
        let queue = []
        let current = this.root

        if (this.root == null){
            return data
        } else {
            queue.push(current)
        } 

        while (queue.length){
            current = queue.shift()
            
            data.push(current.data)

            if (current.left != null){
                queue.push(current.left)
            }
            
            if (current.right != null){
                queue.push(current.right)
            }
        }

        return data
    }

    dfsPreOrder(){
        let data = []
        let current = this.root

        if (current == null){
            return data
        }

        function dfsHelper(node){
            data.push(node.data)
            if (node.left){
                dfsHelper(node.left)
            }
            if (node.right){
                dfsHelper(node.right)
            }
        }

        dfsHelper(current)

        return data
    }

    
}
let tree = new BinarySearchTree()
console.log(tree)

//         10
//     5       13
//   2   7   11  16

// Create tree
console.log(tree.insert(10))
console.log(tree.insert(5))
console.log(tree.insert(13))
console.log(tree.insert(11))
console.log(tree.insert(2))
console.log(tree.insert(16))
console.log(tree.insert(7))

// Insert duplicate test
console.log(tree.insert(5))

// Find unknown test
// console.log(tree.find(8))

// BFS
console.log(tree.bfs())

// DFS PreOrder (Root before children)
console.log(tree.dfsPreOrder())
