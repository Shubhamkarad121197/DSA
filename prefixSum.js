let arr = [10, 20, 10, 5, 15];
// Output: [10, 30, 40, 45, 60]

function findPrefixSum(arr){
    let prefixSum=new Array(arr.length);
    prefixSum[0]=arr[0];
    for(let i=1;i<arr.length;i++){
        prefixSum[i]=prefixSum[i-1]+arr[i];
    }
    return prefixSum;
}

console.log(findPrefixSum(arr));