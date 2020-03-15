const MinhaClasse = require('./js-class') 
const novapessoa = new MinhaClasse('Rafael', 20)  
   
// dentro de uma função assíncrona
const getDados = async() => { 
    const nome = await novapessoa.getNome() 
    const Idade = await novapessoa.getIdade() 
    console.log("Nome :"+nome+", Idade:"+Idade) 
} 
getDados()      
 
// set
novapessoa.setIdade(30)
 
// utilizando async como uma promessa
novapessoa.getIdade().then( (idade) => 
    { 
        console.log(idade)
    }
).catch((error) =>{ 
    console.log(error)
})
 
novapessoa.getNome().then( (nome) => 
    { 
        console.log(nome)
    }
)  
// utilizando uma promessa de fato
novapessoa.getIdadeByPromise().then((idade) =>{ 
    console.log(idade)
}).catch((error) =>{ 
    console.log(error)
})

