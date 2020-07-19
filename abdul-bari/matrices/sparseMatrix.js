class Element {

    constructor(row, col, data) {

        this.row = row;
        this.col = col;
        this.data = data;
    }
}


class Sparse {

    constructor(rows, cols, count) {
        this.rows = rows;
        this.cols = cols;
        // this.count=count;
        this.arr = []
    }



    setData(row, col, data) {

        this.arr.push(new Element(row, col, data))

    }

    addMatrix(mat1, mat2) {


        let row = mat1.rows > mat2.rows ? mat1.rows : mat2.rows
        let col = mat1.cols > mat2.cols ? mat1.cols : mat2.cols
        let count = mat1.arr.length > mat2.arr.length ? mat1.arr.length : mat2.arr.length
        let m = 0;
        let n = 0;
        let res = new Sparse(row, col, 1);

        for (let j = 0; j < count; j++) {
            if (m < mat1.arr.length && n < mat2.arr.length &&
                mat1.arr[m].row == mat2.arr[n].row && mat1.arr[m].col == mat2.arr[n].col) {
                res.arr.push(new Element(mat1.arr[m].row, mat2.arr[n].col, mat1.arr[m].data + mat2.arr[n].data))

            } else {
                if (m < mat1.arr.length) {
                    res.arr.push(new Element(mat1.arr[m].row, mat1.arr[m].col, mat1.arr[m].data))

                }
                if (n < mat2.arr.length) {
                    res.arr.push(new Element(mat2.arr[n].row, mat2.arr[n].col, mat2.arr[n].data))
                }
            }
            m++;
            n++;
        }

        return res;
        // console.log(res)
        // console.log(res.arr.length)
        // console.log(mat2)

    }

    showmatrix() {

        let k = 0;
        for (let i = 1; i <= this.rows; i++) {
            for (let j = 1; j <= this.cols; j++) {

                if (k < this.arr.length && i == this.arr[k].row && j == this.arr[k].col) {
                    process.stdout.write(this.arr[k++].data.toString())
                    process.stdout.write(",")
                } else {
                    process.stdout.write("0")
                    process.stdout.write(",")
                }
            }
            console.log();
        }
    }

}


let mat = new Sparse(8, 9, 9);


mat.setData(1, 1, 2)
mat.setData(1, 2, 3)
mat.setData(1, 3, 4)
mat.setData(1, 4, 5)
mat.setData(1, 5, 6)
mat.setData(2, 1, 7)
mat.setData(3, 1, 8)
mat.setData(4, 1, 9)
mat.setData(5, 1, 10)

mat.showmatrix()


console.log("---------------")
let mat1 = new Sparse(8, 9, 9);

mat1.setData(1, 1, 2)
mat1.setData(1, 2, 3)
mat1.setData(1, 3, 4)
mat1.setData(1, 4, 5)
mat1.setData(1, 5, 6)
mat1.setData(2, 1, 7)
mat1.setData(3, 1, 8)
mat1.setData(4, 1, 9)
mat1.setData(5, 1, 10)


mat1.showmatrix()
console.log("---------------")

// console.log(mat1.arr)

let res=mat1.addMatrix(mat1, mat);
res.showmatrix()