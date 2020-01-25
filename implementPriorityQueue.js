// Priority Queue (Max Heap-ish)
class Node {
    constructor(data, priority){
        this.value = data
        this.priority = priority
    }
}
class PriorityQueue {
    constructor(){
       this.store = []
    }

    enqueue(data, priority){
        let node = new Node(data,priority)
        this.store.push(node)
        this.helpBubbleUp()
    }

    helpBubbleUp(){
        let indexNewData = this.store.length - 1
        const node = this.store[indexNewData]

        while(indexNewData > 0){
            let parentIndex = Math.floor((indexNewData - 1)/2)
            let parent = this.store[parentIndex]

            if(node.priority >= parent.priority) break
            this.store[parentIndex] = node
            this.store[indexNewData] = parent

            indexNewData = parentIndex
        }
    }

    dequeue(){
        let min = this.store[0]
        let end = this.store.pop()

        if(this.store.length > 0){
            this.store[0] = end
            this.helpBubbleDown()
        }
        
        return min
    }

    helpBubbleDown(){
    let index = 0
    const length = this.store.length
    const newNode = this.store[0]

    // eslint-disable-next-line no-constant-condition
    while(true){
        let leftChildIdx = 2 * index + 1
        let rightChildInx = 2 * index + 2
        let leftChild, rightChild
        let swap = null

        if(leftChildIdx < length) {
            leftChild = this.store[leftChildIdx]

            if(leftChild.priority > newNode.priority){
                swap = leftChildIdx
            }
        }

        if(rightChildInx < length) {
            rightChild = this.store[rightChildInx]
            if(rightChild.priority > newNode && rightChild.priority < leftChild.priority){
                // (swap === null && rightChild > data) || 
                // (swap !== null && rightChild > leftChild)){
                swap = rightChildInx
            }
        }

        if(swap === null) break
        this.store[index] = this.store[swap]
        this.store[swap] = newNode
        index = swap
    }

    }
       
}

let priorityQueue = new PriorityQueue()
priorityQueue.enqueue(55)
priorityQueue.enqueue(12)
priorityQueue.enqueue(99)
priorityQueue.enqueue(50)
priorityQueue.enqueue(3)
console.log(priorityQueue)

console.log(priorityQueue.dequeue())
console.log(priorityQueue)
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue)
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue)
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue)
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue)
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue)