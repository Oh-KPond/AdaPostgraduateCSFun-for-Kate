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
myGraph.addNode("SEA")
myGraph.addNode("ORD")
myGraph.addEdge("SEA", "ORD")
console.log(myGraph)
myGraph.removeEdge("SEA", "ORD")
console.log(myGraph)
myGraph.addEdge("SEA", "ORD")
console.log(myGraph)
myGraph.removeNode("SEA")
console.log(myGraph)
myGraph.addNode("SEA")
myGraph.addNode("FBX")
myGraph.addNode("LAX")
myGraph.addNode("ANC")
myGraph.addEdge("SEA", "ORD")
myGraph.addEdge("SEA", "ANC")
myGraph.addEdge("SEA", "FBX")
myGraph.addEdge("SEA", "FBX")
myGraph.addEdge("FBX", "ANC")
console.log(myGraph)