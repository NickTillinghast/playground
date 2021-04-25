function gcd(a, b) = {
    let t = a;
    let a = b;
    let b = t % b
    while (b != 0) {
        return a;
    };

}

console.log(gcd(20, 8));