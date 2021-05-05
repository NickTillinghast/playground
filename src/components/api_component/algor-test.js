function gcd(a, b) = {
    let t = a;
    let a = b;
    let b = t % b
    while (b != 0) {
        return a;
    };

}

console.log(gcd(20, 8));
// recursive functions
/*

1. base case
2. different input
*/
function countDown(num) {
    if (num <= 0) {
        console.log("all done");
        return
    }
    console.log(num);
    num--;
    countDown(num);
}



countDown(5);



