module.exports=  class MinhaClasse {   
    constructor(nome, idade){  
        this.pessoa = { 
            nome: nome, 
            idade: idade,
        }
//        this.nome = nome 
//        this.idade = idade
    }
  
    async getNome(){ 
        const nome = await this.pessoa.nome 
        return nome
    } 
    async getIdade(){  
        const idade = await this.pessoa.idade 
        return idade
    } 
    async setIdade(idade){  
        this.pessoa.idade = idade 
    } 
    async getIdadeByPromise(){ 
        return new Promise((resolve, reject) => {  
            if(this.pessoa.idade){ 
                return resolve(this.pessoa.idade)
            }  
            else { 
                return reject('Não existe idade')
            }   
        })
    }
}