let heights=[1 ,8 ,6, 2 ,5, 4, 8,3, 7];
function maxArea(heights){
    let left=0,right=heights.length-1;
    let maxArea=0;
    while(left<right){
        const currentHeight=Math.min(heights[left],heights[right]);
        const width=right-left;
        const area=currentHeight*width;

        maxArea=Math.max(maxArea,area);
        if(heights[left]<heights[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
}


console.log(maxArea(heights));