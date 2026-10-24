let arr=[0, 1, 0, 3, 12];
function movesZero(arr){
    let left=0;
    for(let right=0;right<arr.length;right++){
        if(arr[right]!==0){
            [arr[left],arr[right]]=[arr[right],arr[left]];
            left++;
        }
    }
    return arr;
}

console.log(movesZero(arr));