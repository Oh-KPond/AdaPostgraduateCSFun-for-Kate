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

    // bfs(node){
    //     let queue = []
    //     let visitedNodes = []

    //     while(this.adjacencyList.length <= visitedNodes.length){
    //         // choose a node to start with
    //         // if found, return node
    //         return null
    //     }

    //     return "Node not found"
    // }

    dfsRecurisve(start, toFind){
        let visitedNodes = {};
        let results = []
        const adjacencyList = this.adjacencyList;

        (function dfs(node){
            if(!node) return null
            
            visitedNodes[node] = true
            if (node == toFind){
                results.push(node)
            }
            
            adjacencyList[node].forEach( neighbor => {
                if(!visitedNodes[neighbor]){
                    dfs(neighbor);
                }
            })
        })(start)
        
        if(results.length == 0){
            return "Node not found"
        } else {
            return results
        }
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
myGraph.addEdge("FBX", "ANC")
myGraph.addEdge("LAX", "SEA")
console.log(myGraph)

console.log(myGraph.dfsRecurisve("FBX", "SEA"))
console.log(myGraph.dfsRecurisve("FBX", "ATL"))