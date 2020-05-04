let person1=[];

let age=16;
for(let i=0;i<3;i++){
    let person={name:'홍길동',age:age}
    person1.push(person)
    age++;
}

let person2=person1

person2[0].age=20

console.log(person1)
console.log(person2)