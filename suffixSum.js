let arr = [10, 20, 10, 5, 15];
function findSuffixSum(arr){
    let suffixSum=new Array(arr.length).fill(0);
    suffixSum[arr.length-1]=arr[arr.length-1];

    for(let i=arr.length-2;i>=0;i--){
        suffixSum[i]=suffixSum[i+1]+arr[i];
    }
    return suffixSum;
}
console.log(findSuffixSum(arr));