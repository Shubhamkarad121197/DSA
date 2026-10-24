let num=[2,7,11,15];
let target=9;
//Brute Force Approach
function twoSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return [i,j];
            }
        }
    }
    return [-1,-1];
}

console.log(twoSum(num,target));

function optimizeTwoSum(arr,target){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        let diff=target-arr[i];
        if(map.has(diff)){
            return [map.get(diff),i]
        }else{
            map.set(arr[i],i)
        }
    }
    return [-1,-1];
}

console.log(optimizeTwoSum(num,target));