class Matrix {
    constructor(size) {
        this.size = size;
        this.len = 2 * size - 1;
        this.arr = new Array(this.len);
    }

    setData(i, j, data) {

        if (i <= j) {
            this.arr[j - i] = data;
        } else{
            this.arr[this.size +i-2] = data;
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
                if (j - i>= 0) {
                    process.stdout.write(this.arr[j - i].toString())
                    process.stdout.write(",")
                } else if (j - i< 0) {
                    process.stdout.write(this.arr[this.size +i-j-1].toString())
                    process.stdout.write(",")
                }else{
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
mat.setData(1, 2, 3)
mat.setData(1, 3, 4)
mat.setData(1, 4, 5)
mat.setData(1, 5, 6)
mat.setData(2, 1, 7)
mat.setData(3, 1, 8)
mat.setData(4, 1, 9)
mat.setData(5, 1, 10)
// mat.setData(1, 2, 23)
// mat.setData(2, 3, 23)
// mat.setData(3, 4, 23)
// mat.setData(4, 5, 22)



// mat.setData(5, 1, 22)
// mat.setData(5, 2, 23)
// mat.setData(5, 3, 24)




mat.showatrix()

console.log(mat.arr)

// process.stdout.write("A")
// process.stdout.write("Ads")