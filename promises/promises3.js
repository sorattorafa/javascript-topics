Promise.race([
    new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve('A');
      }, 100);
    }),
    new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve('B');
      }, 300);
    }),
    new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve('C');
      }, 500);
    }),
    new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve('D');
      }, 500);
    }),
    new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve('E');
      }, 500);
    })
  ]).then(result=>{
    console.info(result);
  }).catch(reason=>{
    console.warn('Failed: ', reason);
  });