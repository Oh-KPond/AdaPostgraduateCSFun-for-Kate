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
       
}

let maxHeap = new MaxHeap()
maxHeap.insert(55)
maxHeap.insert(12)
maxHeap.insert(99)
maxHeap.insert(50)
maxHeap.insert(3)
console.log(maxHeap)
