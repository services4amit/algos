function test(num) {

    console.log("order recvd :", num)
    timer(num)
    console.log("other 1")
    console.log("other 11")
    console.log("other 1111")
}
function timer(num) {

    setTimeout(function () { console.log(" comp ",num); }, 5000)

}
test(2)
test(22)
test(222)