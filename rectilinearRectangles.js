/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
 var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    var len1 = ax2-ax1;
    var wid1 = ay2-ay1;
    var area1 = len1 * wid1;
    var len2 = bx2-bx1;
    var wid2 = by2-by1;
    var area2 = len2 * wid2;
    var len3 = Math.min(ax2,bx2) - Math.max(ax1,bx1);
    var wid3 = Math.min(ay2,by2) - Math.max(ay1,by1);
    var area3 = 0;
    if(len3>0 && wid3>0){
        area3 = len3 * wid3;
    }else{
        area3 = 0;
    }
    return area1+area2-area3;
};