let getSum=function(arr){
    let sum=0;
    for (let i in arr){
        sum+=parseInt(i)
    }
    return sum;
}

//let arr=[1,2,3,4,5];
console.log(getSum([1,2,3,4]))