class PriorityQueue {
    constructor(){
        this.values = []
    }

    enqueue(value, priority) {
        this.values.push({value, priority})
        this.sort()
    }

    dequeue() {
        return this.values.shift()
    }
    sort() {
        this.values.sort((a, b) => a - b)
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addNode(node) {
        if (!this.adjacencyList[node]) {
            this.adjacencyList[node] = []
        }
    }

    addEdge(node1, node2, weight) {
        this.adjacencyList[node1].push({node: node2, weight})
        this.adjacencyList[node2].push({node: node1, weight})
    }

    dijkstra(start, finish) {
        const queue = new PriorityQueue()
        const distances = {}
        const previous = {}

        let path = []
        let currentSmallestNode

        for(let node in this.adjacencyList){
            if (node == start){
                distances[node] = 0
                queue.enqueue(node, 0)
            } else {
                distances[node] = Infinity
                queue.enqueue(node, Infinity)
            }
            previous[node] = 0
        }

        while(queue.values.length){
            // The value of the dequeued node from the priority queue that's sorted to give the smallest distance (in this case city)
            currentSmallestNode = queue.dequeue().value

            // We're finished if
            if(currentSmallestNode === finish) {
                // Create the path
                while(previous[currentSmallestNode]){
                    path.push(currentSmallestNode)
                    currentSmallestNode = previous[currentSmallestNode]
                }
                break
            }
            if(currentSmallestNode || distances[currentSmallestNode] !== Infinity){
                // Look through the adjacency list for the node that was dequeued
                for(let neighbor in this.adjacencyList[currentSmallestNode]){
                    // This is the next node in the adjacenyList
                    let nextNode = this.adjacencyList[currentSmallestNode][neighbor]
                    // Calculate new distance to neighboring node
                    let newDistance = distances[currentSmallestNode] + nextNode.weight
                    let nextNeighbor = nextNode.node
                    if(newDistance < distances[nextNeighbor]){
                        // Set new smallest distance
                        distances[nextNeighbor] = newDistance
                        // Set previous location
                        previous[nextNeighbor] = currentSmallestNode
                        // Enqueue the priority queue with new priority
                        queue.enqueue(nextNeighbor, newDistance)
                    }
                }
            }
        }
        return path.reverse()
    }
}

let graph = new WeightedGraph

graph.addNode("Atlanta")
graph.addNode("Boston")
graph.addNode("Costa Mesa")
graph.addNode("Seattle")
graph.addNode("Fairbanks")

graph.addEdge("Atlanta", "Boston", 9)
graph.addEdge("Atlanta", "Costa Mesa", 5)
graph.addEdge("Boston", "Costa Mesa", 7)
graph.addEdge("Boston", "Seattle", 10)
graph.addEdge("Seattle", "Fairbanks", 3)

console.log(graph.dijkstra("Atlanta", "Fairbanks"))