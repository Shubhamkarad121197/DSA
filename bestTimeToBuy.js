let arr=[7, 1, 5, 3, 6, 4];
function findMaxProfit(arr){
    let minPrice=Infinity;
    let maxProfit=0;
    for(let i=0;i<arr.length;i++){
        if(minPrice>arr[i]){
            minPrice=arr[i];
        }else{
            let profit=arr[i]-minPrice;
            maxProfit=Math.max(maxProfit,profit);
        }
    }
    return maxProfit;
}

console.log(findMaxProfit(arr));