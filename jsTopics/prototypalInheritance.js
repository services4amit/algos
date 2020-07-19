
let obj = {
    name: "ajit",
    id: 20,
    add:"bam",
    getDetails: function () {
        return this.name + this.id;
    }
}

let obj2 = {
    nameqq: "amar",
    idqq: 22
}
obj2.__proto__=obj;
console.log(obj2.__proto__)
console.log(obj2.add)