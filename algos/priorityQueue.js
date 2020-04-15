class PriorityQueue {

    constructor() {
        this.elements = []

    }
    swap(arr, i, j) {

        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr;
    }
    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    getData() {
        return this.elements;
    }
    insert(node) {
        let end = this.elements.length;
        this.elements.push(node)

        while (end >= 1) {
            if (this.elements[end].priority > this.elements[this.parent(end)].priority) {
                this.swap(this.elements, end, this.parent(end))
            }
            end = this.parent(end)

        }
    }

    extractMax() {


        let ele = this.elements[0];
        let length = this.elements.length;
        this.elements[0] = this.elements.pop();
        let idx = 0;

        while (true) {

            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let swapped = null;

            if (leftIdx < length) {
                if (this.elements[leftIdx].priority > this.elements[idx].priority) {

                    swapped = leftIdx;

                }
            }

            if (rightIdx < length) {
                if ((swapped === null && this.elements[rightIdx].priority > this.elements[idx].priority) || (swapped !== null && this.elements[rightIdx].priority > this.elements[leftIdx].priority)) {


                    swapped = rightIdx;

                }
            }


            if (swapped === null)
                break;


            this.swap(this.elements, idx, swapped);

        }

        return ele;
    }

}

class Node {

    constructor(value, priority) {

        this.value = value;
        this.priority = priority;
    }
}

let queue = new PriorityQueue();
queue.insert(new Node("a", 1))
queue.insert(new Node("aqe", 11))
queue.insert(new Node("adwd", 21))
queue.insert(new Node("aww", 1000))
console.log(queue.getData());
console.log(queue.extractMax());
console.log(queue.getData());

