class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addNode(name){
        if(!this.adjacencyList[name]){
            this.adjacencyList[name] = []
        }
    }

    addEdge(node1, node2){
        if(this.adjacencyList[node1]){
            this.adjacencyList[node1].push(node2)
            this.adjacencyList[node2].push(node1)
        }
    }

    removeEdge(node1, node2){
        this.adjacencyList[node1] = this.adjacencyList[node1].filter(
            node => node !== node2
        );

        this.adjacencyList[node2] = this.adjacencyList[node2].filter(
            node => node !== node1
        );
    }

    removeNode(node){
        this.adjacencyList[node].forEach(innerNode => {
            this.adjacencyList[innerNode] = this.adjacencyList[innerNode].filter(vNode => vNode !== node)
        });
        delete this.adjacencyList[node]
    }
}   



let myGraph = new Graph()
myGraph.addNode("firstNode")
myGraph.addNode("secondNode")
myGraph.addEdge("firstNode", "secondNode")
console.log(myGraph)
myGraph.removeEdge("firstNode", "secondNode")
console.log(myGraph)
myGraph.addEdge("firstNode", "secondNode")
console.log(myGraph)
myGraph.removeNode("firstNode")
console.log(myGraph)