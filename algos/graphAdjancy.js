class GraphAdjancy {


    constructor() {
        this.adjancyList = {};
    }

    addVertex(vertex) {

        if (!this.adjancyList[vertex])
            this.adjancyList[vertex] = [];

    }

    addEdge(v1, v2) {

        if (this.adjancyList[v1] && this.adjancyList[v2]) {

            this.adjancyList[v1].push(v2);
            this.adjancyList[v2].push(v1);

        }


    }

    removeEdge(v1, v2) {

        if (this.adjancyList[v1] && this.adjancyList[v2]) {


            this.adjancyList[v1] = this.adjancyList[v1].filter((data) => data !== v2)
            this.adjancyList[v2] = this.adjancyList[v2].filter((d) => d !== v1)

        }

    }


    removeEdgeFromVertex(v1, v2) {

        this.adjancyList[v1] = this.adjancyList[v1].filter((data) => data !== v2)


    }

    removeVertex(v) {

        if (this.adjancyList[v]) {

            let arr = this.adjancyList[v];

            for (let i of arr) {
                this.removeEdgeFromVertex(i, v)
            }
            delete this.adjancyList[v];
        }


    }

    dfsItr() {
        let start = Object.keys(this.adjancyList)[0];
        let stack = [start]
        let results = [];
        let visited = {};


        visited[start] = true;
        while (stack.length) {

            let a = stack.pop();
            results.push(a);
            this.adjancyList[a].map((v) => {

                if (!(visited[v] === true)) {
                    visited[v] = true;
                    stack.push(v);
                }
            });


        }

        return results;
    }

    dfs() {
        let start = Object.keys(this.adjancyList)[0];
        let results = [];
        let visited = {};
        let adjancyList = this.adjancyList;

        function dfsRec(vertex) {

            if (!vertex) {
                console.log(vertex)
                return null;
            }

            results.push(vertex);
            visited[vertex] = true;
            adjancyList[vertex].map((v) => {

                if (!(visited[v] === true)) {
                    return dfsRec(v);
                }

            });

        }
        dfsRec(start);
        return results;



    }

    bfs() {

        let start = Object.keys(this.adjancyList)[0];
        let queue = [start];
        let results = [];
        let visited = {};

        results.push(start);
        visited[start] = true;

        while (queue.length) {


            let a = queue.shift();

            this.adjancyList[a].map((v) => {

                if (!(visited[v] === true)) {
                    results.push(v);
                    visited[v] = true;
                    queue.push(v)
                }
            })

        }



        return results;
    }


    getData() {

        return this.adjancyList;
    }
}


let graph = new GraphAdjancy();

graph.addVertex("A");
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");


// console.log(graph.getData())

// console.log(graph.getData())
// graph.removeEdge("v3", "v2")
// console.log(graph.getData())
// graph.removeVertex("v2")
console.log(graph.bfs());
console.log(graph.getData())