// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    // const arr=str.split('')
    // console.log(str.split('').reverse().join(''))


    // let rev='';
    // for(let a of str){
    //     rev=a+rev;
    // }
    // console.log(rev)


    let rev='';
    console.log(str.split('').reduce((rev,a)=>{
        return a+rev;
    },''))

}

reverse("ajit")

module.exports = reverse;
