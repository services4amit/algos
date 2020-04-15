class MaxHeaps {


    constructor() {

        this.elements = [];
    }

    getData() {
        return this.elements;
    }


    swap(arr, i, j) {

        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr;
    }

    insert(data) {
        let childIndex = this.elements.length;
        let temp;
        this.elements.push(data);

        // console.log(ele)

        while (childIndex >= 1 && this.elements[parent(childIndex)] < this.elements[childIndex]) {
            // console.log("values" ,ele[i],ele[parent(i)])
            this.swap(this.elements, childIndex, parent(childIndex))
            // temp = this.elements[childIndex];
            // this.elements[childIndex] = this.elements[parent(childIndex)];
            // this.elements[parent(childIndex)] = temp;

            childIndex = parent(childIndex);



        }
        // console.log("after swap",this.elements)

        function parent(i) {
            return Math.floor((i - 1) / 2);
        }

    }

    extractMax() {
        let end = this.elements.pop();
        this.elements[0] = end;
        let length = this.elements.length;
        let idx = 0;

        while (true) {

            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;

            let swapped = null;

            if (leftIdx < length) {
                if (this.elements[leftIdx] > this.elements[idx]) {
                    swapped = leftIdx
                }
            }
            if (rightIdx < length) {
                if ((swapped === null && this.elements[rightIdx] > this.elements[idx]) || (swapped !== null && this.elements[rightIdx] > this.elements[leftIdx])) {
                    swapped = rightIdx
                }
            }

            if (swapped === null)
                break;


                this.swap(this.elements,idx,swapped)
            // let ele = this.elements[idx];
            // this.elements[idx] = this.elements[swapped];
            // this.elements[swapped] = ele;
            idx = swapped;

        }


    }



}

let heap = new MaxHeaps();
heap.insert(5);
heap.insert(10);
heap.insert(101);
heap.insert(104);
heap.insert(1040);
heap.insert(4);
heap.insert(42);
console.log(heap.getData())
heap.extractMax();
heap.extractMax();
console.log(heap.getData())