
// Ex: Callback hell
let square = (a,b,h)=>(a+b) * h/2;

console.log('Dien tich :' + square(2,3,2));

let add = (a,b,cb)=>{
    setTimeout(()=>{      
        if(typeof a !== 'number' || typeof b !== 'number'){            
            return cb(new Error('Tham số phai có kieu number'));            
        }           
        cb(undefined,a + b);
    },1000)
}

let multiply = (a,b,cb)=>{
    setTimeout(()=>{      
        if(typeof a !== 'number' || typeof b !== 'number'){            
            return cb(new Error('Tham số phai có kieu number'));            
        }           
        cb(undefined,a * b);
    },1000)
}
let divide = (a,b,cb)=>{
    setTimeout(()=>{      
        if(typeof a !== 'number' || typeof b !== 'number'){            
            return cb(new Error('Tham số phai có kieu number'));            
        }        
        if(b==0)   return cb(new Error('Loi chia cho 0'));            
        cb(undefined,a/b);
    },1000)
}
//add(4,5,(e,res)=>{
   // if(err){ return console.log('Loi : ' + err)}
  //  console.log('Ket qua :' + result);
//})

let tinhdientichhinhthang = (a,b,h,cb)=>{
    add(a,b,(e,res)=>{
       if(e){ return cb(e)}
       multiply(res,h,(err,result)=>{
            if(e){ return cb(e)}
            divide(result,2,(err,result)=>{
                 if(err){ return cb(err)}
                 cb(undefined,result);          
            })
       })
     })

}

tinhdientichhinhthang(2,3,2,(err,result)=>{
     if(err){ return console.log(err+ '')}
     console.log('KQ:' + result);
})