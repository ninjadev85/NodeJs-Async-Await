let mang = [4,5,6,3,8,9];

//mang.forEach(e=>console.log(e));

var nhan2 = e=>e*2;
var mang2 = mang.map(nhan2) 

console.log(mang2);

function add(a,b){
    return a+b;
}

let add1 = (a,b) =>  a+b;

//console.log(add1(4,5));

// function return a function
let getFunction =(number)=>{   
    if(number > 0 ){
        return ()=>console.log('so duong')
    }
    return ()=>console.log('so am')
}  
getFunction(-1)(); // excute a function

let a=()=>{}


console.log(a());
