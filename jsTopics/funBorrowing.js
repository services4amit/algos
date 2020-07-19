//bind

let obj = {
    name: "ajit",
    id: 20,
    getDetails: function () {
        return this.name + this.id;
    }
}

let obj2 = {
    name: "amar",
    id: 20
}







    
    console.log(obj.getDetails.call(obj2))
