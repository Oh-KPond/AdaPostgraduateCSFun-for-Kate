// Max Heap

class MaxHeap {
    constructor(){
       this.store = []
    }

    insert(data){
        this.store.push(data)
        this.helpBubbleUp()
    }

    helpBubbleUp(){
        let indexNewData = this.store.length - 1
        const data = this.store[indexNewData]

        while(indexNewData > 0){
            let parentIndex = Math.floor((indexNewData - 1)/2)
            let parent = this.store[parentIndex]

            if(data <= parent) break
            this.store[parentIndex] = data
            this.store[indexNewData] = parent

            indexNewData = parentIndex
        }
    }

    removeMax(){
        let max = this.store[0]
        let end = this.store.pop()

        if(this.store.length > 0){
            this.store[0] = end
            this.helpBubbleDown()
        }
        
        return max
    }

    helpBubbleDown(){
    let index = 0
    const length = this.store.length
    const data = this.store[0]

    while(true){
        let leftChildIdx = 2 * index + 1
        let rightChildInx = 2 * index + 2
        let leftChild, rightChild
        let swap = null

        if(leftChildIdx < length) {
            leftChild = this.store[leftChildIdx]

            if(leftChild > data){
                swap = leftChildIdx
            }
        }

        if(rightChildInx < length) {
            rightChild = this.store[rightChildInx]
            if(rightChild > data && rightChild > leftChild){
                // (swap === null && rightChild > data) || 
                // (swap !== null && rightChild > leftChild)){
                swap = rightChildInx
            }
        }

        if(swap === null) break
        this.store[index] = this.store[swap]
        this.store[swap] = data
        index = swap
    }

    }
       
}

let maxHeap = new MaxHeap()
maxHeap.insert(55)
maxHeap.insert(12)
maxHeap.insert(99)
maxHeap.insert(50)
maxHeap.insert(3)
console.log(maxHeap)

console.log(maxHeap.removeMax())
console.log(maxHeap)
// console.log(maxHeap.removeMax())
// console.log(maxHeap)
// console.log(maxHeap.removeMax())
// console.log(maxHeap)
// console.log(maxHeap.removeMax())
// console.log(maxHeap)
// console.log(maxHeap.removeMax())
// console.log(maxHeap)
// console.log(maxHeap.removeMax())
// console.log(maxHeap)