/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    
    if(n<=1){
     return n;
 }
 var a = 0, b = 1;
 for(let i = 2; i<=n; i++){
     var temp = a;
     a = b;
     b = b+temp;
 }
 return b;

};