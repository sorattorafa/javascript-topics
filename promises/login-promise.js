// promises params
const params = {
    name: 'Dani',
    age: 23
}

// validade string name and age number
const validateMiddlewareParams = params => new Promise((resolve,reject) =>{ 
    const {
        name,
        age
    } = params;
    // name = not a number;
    // age != not a number = number; xD
    if(isNaN(name) && !isNaN(age)){
        resolve(params);
    }
    else {
        console.log('Middleware error, invalid Params')
        reject(params);
    }
})

// function returns a promise
const verifyLogin = params => new Promise((resolve,reject) =>{ 
    const {
        name,
        age
    } = params;
    if (name === 'Dani' && age === 23){
        resolve(params);
    }
    reject(params);
})

// set params and functions to resolve it
Promise
    .resolve(params)
    .then(validateMiddlewareParams)
    .then(verifyLogin)
    .then(() =>{
        console.log('OK, verified');
    })
    .catch(() =>{
        console.log('WARNING, NOT verified');
    })