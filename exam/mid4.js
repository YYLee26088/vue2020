let sum=function(arr){
    let a=0;
    for (let i=0;i<arr.length;i++){
        a+=parseInt(arr[i])
    }
    return a;
}

function test_sum(f){
    let arr=[]
    for(let i=0;i<5;i++){
        arr[i]=Math.floor(Math.random()*11);
    }
    console.log("배열 "+arr)
    console.log("합계 "+f(arr))
    console.log("-------")
}

for(let i=0;i<5;i++){
    test_sum(sum)
}