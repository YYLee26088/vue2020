let arr=[];

function callback(a,b){
    return a+b;
}

for (let i=0;i<100;i++){
    arr[i]=Math.floor(Math.random()*100+1);
}

let sum=arr.reduce(callback);
let average=(sum/100).toFixed(1);

console.log('평균: '+average)
