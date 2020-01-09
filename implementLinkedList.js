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

    pop() {
        // first check if there is at least one Node in list
        if(!this.head){
            return undefined
        }else{
            let current = this.head;
            let tailToBe= current;
            while (current.next){
                tailToBe = current;
                current = current.next;
            }
            this.tail = tailToBe
            this.tail.next = null
            this.length--
            // if list is empty, set head & tail to be null
            if (this.length == 0){
                this.head = null
                this.tail = null
            }
            return current
        }
    }

    shift(){
        if(!this.head){
            return undefined
        } else {
            let shifted = this.head
            this.head = this.head.next
            this.length--
            if (this.length == 0){
                this.tail = null
            }
            return shifted
        }
    }
    unshift(data){
        let newNode = new Node(data)

        if(!this.head){ 
            this.head = newNode
            this.tail = newNode
        }  
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
}

let newLinkedList = new SinglyLinkedList()

console.log(newLinkedList.push(9))
console.log(newLinkedList.push(10))
console.log(newLinkedList.push(3))

console.log(newLinkedList.pop().data)
console.log(newLinkedList.shift().data)
console.log(newLinkedList.unshift(1))