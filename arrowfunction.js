let mang = [4,5,6,3,8,9];

mang.forEach(e=>console.log(e));

var mang2 = mang.map(e=> e*2) 

console.log(mang2);

function add(a,b){
    return a+b;
}

let add1 = (a,b) =>  a+b;

console.log(add1(4,5));