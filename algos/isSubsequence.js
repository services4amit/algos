function isSubsequence(str1, str2) {


    if (!str2 || !str1) {
        return false;

    }
    else if (str2.length < str1.length) {
        return false;

    }


    let i = 0;
    let j = 0;
    while (j < str2.length) {

        if (str2[j] === str1[i])
            i++;

        if (i === str1.length)
            return true;

        j++;
    }


    return false;

}


console.log(isSubsequence('abc', 'abbbc'))