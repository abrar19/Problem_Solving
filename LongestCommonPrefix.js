/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var LCPrefix = strs[0]; //assuming the first element as LCP
    for(let i = 1; i<strs.length; i++){ //Iterating through the rest of the elements
        while(strs[i].indexOf(LCPrefix) != 0){  //Checking if assumed LCP is the actual LCP by comparing to the next element
                LCPrefix = LCPrefix.substring(0, LCPrefix.length-1); //Reducing the length of the assumed LCP as per the comparison result             
              }
    }
    return LCPrefix;
};