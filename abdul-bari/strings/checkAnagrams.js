function check(str1, str2) {

    let res = new Array(26);

    console.log(res.length)

    for (let k = 0; k < str1.length; k++) {
        if (res[str1[k]] == undefined) {
            res[str1[k]] = 1;
        }
        else {
            res[str1[k]]++;
        }
        if (res[str2[k]] == undefined) {
            res[str2[k]] = 1;
        }
        else {
            res[str2[k]]++;
        }
    }

    console.log(res)

}

check("medical", "decimal")