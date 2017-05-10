
// Ex: Callback hell
let square = (a,b,h)=>(a+b) * h/2;

console.log('Dien tich :' + square(2,3,2));

let add = (a,b,cb)=>{
    setTimeout(()=>{
        let err, result;
        if(typeof a !== 'number' || typeof b !== 'number'){
            err = "Tham số phai có kieu number";
            return cb(err,result);            
        }   
        result = a + b;
        cb(err,result);
    },1000)
}

add(4,5,(err,result)=>{
    if(err){ return console.log('Loi : ' + err)}
    console.log('Ket qua :' + result);
})