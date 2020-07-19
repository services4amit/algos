class Matrix {
    constructor(size) {
        this.size=size;
        this.len = size * (size + 1) / 2;
        this.arr = new Array(this.len);
    }

    setData(i, j, data) {

        if (i >= j) {

            let calc = ((i * (i - 1)) / 2)+j-1;
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
                if (i >= j) {
                    process.stdout.write(this.arr[((i * (i - 1)) / 2)+j-1].toString())
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
mat.setData(2, 1, 21)
mat.setData(2, 2, 22)
mat.setData(3, 1, 23)
mat.setData(3, 2, 24)
mat.setData(3, 3, 21)
mat.setData(4, 1, 22)
mat.setData(4, 2, 23)
mat.setData(4, 3, 24)
mat.setData(4, 4, 21)
mat.setData(5, 1, 22)
mat.setData(5, 2, 23)
mat.setData(5, 3, 24)
mat.setData(5, 4, 21)
mat.setData(5, 5, 22)


mat.showatrix()

console.log(mat.arr)

// process.stdout.write("A")
// process.stdout.write("Ads")