function counteven(arr:number):number{
    let n=arr.length
    let count=0;
    for(let i=0;i<n;i++){
        if(arr[i]%2==0){
            count++;
        }
    }
    return count;

}

console.log(counteven([2,3,4,5,6]))