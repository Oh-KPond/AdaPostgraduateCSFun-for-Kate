class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(data) {
        let newNode = new Node(data)

        if(!this.head){ 
            this.head = newNode
            this.tail = newNode
        } else{ 
            this.tail.next = newNode
            this.tail = newNode  
        }
        this.length++
        return this
    }

    // first check if there is at least one Node in list
    pop() {
        if(!this.head){
            return undefined
        }
        
    }
}

let newLinkedList = new SinglyLinkedList()