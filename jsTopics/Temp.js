// console.log(global)
// console.log(this)

function check(str1, str2) {

    let resp = true;
    if (str1.length != str2.length) {
        return false;
    } else {
        let len = str1.length;
        let obj = {}
        for (let i = 0; i < len; i++) {

            if (obj[str1[i]]) {
                obj[str1[i]] = obj[str1[i]] - 1;
            } else {
                obj[str1[i]] = 1;
            }
            if (obj[str2[i]]) {
                obj[str2[i]] = obj[str1[i]] - 1;
            } else {
                obj[str2[i]] = 1;
            }
        }

        for (let j = 0; j < len; j++) {

            let values = Object.keys(obj);
            for (let k = 0; k < values.length; k++) {
                if (values[k] != 1) {
                    resp = false;
                }
            }

        }

        return resp;
    }
}