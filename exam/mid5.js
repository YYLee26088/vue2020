let arr = [];

for (let i = 0; i < 100; i++) {
    arr[i] = Math.floor(Math.random() * 100 + 1)
}


function callback(a, b) {
    return a + b;
}

let arr2 = arr.filter(e => (e % 2) == 0)

// console.log(arr)
// console.log(arr2)
console.log(arr2.reduce(callback))