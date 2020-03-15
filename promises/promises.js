
const p = new Promise((resolve,reject) => { 
    let a =1+1 
    if(a == 2){ 
        resolve('Sucess')
    } 
    else{ 
        reject('Failed')
    }
}) 

const promise1 = new Promise((resolve,reject) =>{ 
    setTimeout(() =>{ 
        resolve('A promise 1 foi resolvida'); 
    }, 2000);
}); 

const promise2 = new Promise((resolve,reject) =>{ 
    setTimeout(() =>{ 
        resolve('A promise 2  foi resolvida'); 
    }, 2000);
});  
  
Promise.all([promise1, promise2])
    .then(([resultado1, resultado2])=>{ 
        console.log('Todas as promises foram resolvidas'); 
        console.log(resultado1); 
        console.log(resultado2);    
    }).catch((error) =>{  
    console.log('Uma das  promises foi  rejeitada')
    console.log(error)
}) 
 
p.then((message) =>{ 
    console.log('This is in the then'+ message) 

}).catch((message) =>{ 
    console.log('This is in the then'+ message) 
}) 

promise2.then((resultado)=>{ 
    console.log(resultado)
}).catch((error) =>{ 
    console.log(error);
})	
