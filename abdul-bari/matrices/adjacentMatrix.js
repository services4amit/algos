class Matrix {
    constructor(size) {
        this.size = size;
        this.arr = new Array(size);
    }

    setData(i, j, data) {

        if (i == j) {
            this.arr[i - 1] = data;
        }
    }
    getData(i, j) {
        if (i == j) {
            return this.arr[i - 1]
        }

    }

    showatrix() {

        for (let k = 0; k < this.size; k++) {
            for (let l = 0; l < this.size; l++) {
                if (k == l) {
                    process.stdout.write(this.arr[k].toString())
                    process.stdout.write(",")
                }
                else {
                    process.stdout.write("0")
                    process.stdout.write(",")
                }

            }
            console.log();
        }
    }
}


let mat = new Matrix(5);
mat.setData(5, 5, 2)
mat.setData(1, 1, 21)
mat.setData(2, 2, 22)
mat.setData(3, 3, 23)
mat.setData(4, 4, 24)

mat.showatrix()

console.log(mat.arr)