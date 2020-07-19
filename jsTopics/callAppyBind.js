//bind

let obj={
    name:"ajit",
    id:20,
    getDetails:function(){
        console.log(this.name)
    }
}
// console.log(this)
// obj.getDetails()

function otherfun(arg1){

    console.log(arg1)
    this.getDetails()
}

let callOther=otherfun.bind(obj);
// callOther();

// otherfun.call(obj,"qq");
// otherfun.apply(obj,["qwee"])


(function otherfun1(arg1){

    console.log(arg1)
    this.getDetails()
}).call(obj,"ooo")