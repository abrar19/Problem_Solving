/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if(n<=2){
        return n;
    }
    var a = 1, b = 2;
    for(let i = 3; i<=n; i++){
        var temp = a;
        a = b;
        b = b+temp;
    }
    return b;
};