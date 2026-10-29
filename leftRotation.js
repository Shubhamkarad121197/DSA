let arr=[1 ,2, 3, 4, 5];

function leftRotation(arr){
    let firstElement=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        arr[i]=arr[i+1]
    }
    arr[arr.length-1]=firstElement;

    return arr;
}
console.log(leftRotation(arr));