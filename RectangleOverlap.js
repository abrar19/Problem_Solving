/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
 var isRectangleOverlap = function(rec1, rec2) {
    var len1 = Math.min(rec1[2],rec2[2]) - Math.max(rec1[0],rec2[0]);
    var wid1 = Math.min(rec1[3],rec2[3]) - Math.max(rec1[1],rec2[1]);
    
    /* In other words, the overlap of two integer intervals is a difference between the minimum 
    value of the two upper boundaries and the maximum value of the two lower boundaries */
    
    if(len1>0 && wid1>0){
        return true;
    }else{
        return false;
    }
};