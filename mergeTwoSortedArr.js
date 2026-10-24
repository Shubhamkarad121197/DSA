let arr1=[1,2,3],arr2=[2,5,6];

function mergeSortedArr(arr1,arr2){
    let m=arr1.length;let n=arr2.length;
    let mergeArr=[];
    let i=0,j=0;
    while(i<m && j<n){
        if(arr1[i]<arr2[j]){
            mergeArr.push(arr1[i]);
            i++;
        }else{
            mergeArr.push(arr2[j])
            j++;
        }

      
    }
      while(i<m){
            mergeArr.push(arr1[i]);
            i++;
        }
        while(j<n){
            mergeArr.push(arr2[j])
            j++;
        }
    return mergeArr;
}

console.log(mergeSortedArr(arr1,arr2));