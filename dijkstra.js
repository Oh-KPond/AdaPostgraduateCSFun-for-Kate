class PriorityQueue {
    constructor(){
      this.values = []
    }
    enqueue(val, priority) {
      this.values.push({val, priority})
      this.sort()
    }
    dequeue() {
      return this.values.shift()
    }
    sort() {
      this.values.sort((a, b) => a.priority - b.priority)
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }
    addNode(node){
        if(!this.adjacencyList[node]) this.adjacencyList[node] = []
    }
    addEdge(node1,node2, weight){
        this.adjacencyList[node1].push({node:node2,weight})
        this.adjacencyList[node2].push({node:node1, weight})
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let path = [] //to return at end
        let smallest
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }
        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight
                    let nextNeighbor = nextNode.node
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()     
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

console.log(graph.Dijkstra("Atlanta", "Fairbanks"))