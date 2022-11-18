/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    
    for(let i = digits.length-1; i>=0; i--){ //reverse iteration of the given array
        if(digits[i] < 9){ //need to increase by 1 if less than 9
            digits[i] += 1;
            return digits; //As we need to add 1 only so we will return the array asap we succeed 
        }else{
        digits[i] = 0; //if greater than 9, we will make this value 0 and try to increase 1 in the next index(reverse)
        }
    }
    digits.unshift(1);
    return digits;
};