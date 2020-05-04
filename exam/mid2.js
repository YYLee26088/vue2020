let arr=[];

for (let i=0;i<100;i++){
    arr[i]=Math.floor(Math.random()*100+1);
}

function compare(i,j){
    return j-i;
}

//console.log(arr)
console.log(arr.sort(compare))