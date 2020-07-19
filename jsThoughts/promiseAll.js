let arr = [1, 2, 3, 4,12, 5, 6, 7];

square = (n) => {
    return new Promise((resolve, reject) => {
        if (n == 4) {
            // reject("INVALID_NUMBER")
            resolve("INVALID_NUMBER")
        }
        setTimeout(() => {
            // postinsql(topicId);
            resolve(n * n);
        }, 2000);

    })

}


async function withPromiseALL() {

    // try {
    //     let promises = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         promises.push(multiplier(arr[i]))
    //         promises.push(ih(arr[i]))
    //         promises.push(asas(arr[i]))
    //         promises.push(qweq(arr[i]))
    //         promises.push(add(arr[i]))
    //     }

    //     const results = await Promise.all(promises)
    //     console.log("res", results);
    // } catch (e) {
    //     console.log("ERROR is ", e)

    // }

    try {
        let promises = [];
        arr.map((n) => {
            promises.push(square(n))

        })

        const results = await Promise.all(promises)
        console.log("res", results);
    } catch (e) {
        console.log("ERROR is ", e)

    }




    // let promisesnew= arr.map(async (n) => {
    //     const result = await square(5)
    //     console.log("result",result)
    //     return result;
    // })

    // const resultnew =await Promise.all(promisesnew)

}
withPromiseALL();

async function withOutPromiseAll() {

    try {
        for (let i = 0; i < arr.length; i++) {
            // promises.push(square(5))
            let res = await square(arr[i]);
            console.log("res", res);
        }
    } catch (e) {

        console.log("ERROR is ", e)
    }

}

// withOutPromiseAll()
