let num=[3,2,3];
function majorityElement(nums){

    let map=new Map();
    for(let num of nums){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1);
        }
    }

    for(let [val,count] of map.entries()){
        if(count>nums.length/2){
            return val;
        }
    }


}
console.log(majorityElement(num));