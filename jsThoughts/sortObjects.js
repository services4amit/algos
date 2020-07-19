function compare(a, b) {
    const bandA = a.size;
    const bandB = b.size;

    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison * -1 ;
}


let a = [{ color: 'white', size: 12 }, { color: 'aa', size: 124 }, { color: 'aee', size: 11.2 }];
console.log(a.sort(compare))