let arr = [10, 5, 25, 8, 30, 12];

function findMaxNo(arr){
    let maxNo=arr[0];
    for(let i=1;i<arr.length;i++){
        if(maxNo<arr[i]){
            maxNo=arr[i]
        }
    }
    return maxNo;
}

console.log(findMaxNo(arr));