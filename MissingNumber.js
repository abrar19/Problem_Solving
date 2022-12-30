/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const sumUptoN = (n*(n+1))/2;
    let sumOfArrayElements = 0;
    
    for(let i=0;i<n;i++)
        sumOfArrayElements+=nums[i];
    
    return (sumUptoN - sumOfArrayElements);
};