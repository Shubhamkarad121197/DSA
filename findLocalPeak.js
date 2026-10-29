let arr=[4 ,2 ,3, 1 ,5, 6, 4]

function findLocalPeak(arr){

    let peaks=[];
    for(let i=0;i<arr.length;i++){
        if(i==0 && arr[i]>arr[i+1]){
            peaks.push(arr[i]);
        }else if(i==arr.length-1 && arr[i]>arr[i+1]){
            peaks.push(arr[i])
        }else if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
            peaks.push(arr[i]);
        }
    }
    return peaks;
}

console.log(findLocalPeak(arr));