const crypto = require("crypto")

class Leitor {

    #codigo = "";
    #nome = "";
    #cpf = "";
    #dataNascimento = "";

    constructor(nome) {
       this.#nome = nome.toLowerCase()
       this.#codigo = crypto.randomUUID()
    }

    get getNome(){
        return this.#nome

    }

    /*set setNome(nome){
        this.#nome = nome
        }*/

    get getCpf(){
        return this.#cpf

    }

    set setCpf(cpf){
        this.#cpf = cpf
        }
    
    get getDataNascimento(){
        return this.#dataNascimento

    }

    set setDataNascimento(dataNascimento){
        this.#dataNascimento = dataNascimento
        }

    get getCodigo(){
        return this.#codigo 
    }

}

module.exports = Leitor;

