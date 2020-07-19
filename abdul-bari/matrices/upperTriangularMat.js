class Matrix {
    constructor(size) {
        this.size = size;
        this.len = size * (size + 1) / 2;
        this.arr = new Array(this.len);
    }

    setData(i, j, data) {

        if (i <= j) {

            let calc = ((j * (j - 1)) / 2) + i - 1;
            // console.log(calc)
            this.arr[calc] = data;
        }
    }
    getData(i, j) {
        if (i == j) {
            return this.arr[i - 1]
        }

    }

    showatrix() {

        for (let i = 1; i <= this.size; i++) {
            for (let j = 1; j <= this.size; j++) {
                if (i <= j) {
                    process.stdout.write(this.arr[((j * (j - 1)) / 2) + i - 1].toString())
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
mat.setData(1, 1, 2)
mat.setData(1, 2, 21)
mat.setData(2, 2, 22)
mat.setData(1, 3, 23)
mat.setData(2, 3, 24)
mat.setData(3, 3, 21)
mat.setData(1, 4, 22)
mat.setData(2, 4, 23)
mat.setData(3, 4, 24)
mat.setData(4, 4, 21)
mat.setData(1, 5, 22)
mat.setData(2, 5, 23)
mat.setData(3, 5, 24)
mat.setData(4, 5, 21)
mat.setData(5, 5, 22)


mat.showatrix()

console.log(mat.arr)

// process.stdout.write("A")
// process.stdout.write("Ads")