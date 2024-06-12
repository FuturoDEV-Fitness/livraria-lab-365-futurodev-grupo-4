const crypto = require("crypto");


class Instrumento {

    #marca = ''
    #modelo = ''
    #tipo = ''
    #estado = ''
    #codigo = ''

    constructor(tipo) {
       this.#tipo = tipo.toLowerCase()
       this.#codigo = crypto.randomUUID();
    }

    set setMarca(marca){
        this.#marca = marca.toLowerCase()
    }

    get getMarca(){
        return this.#marca
    }

    set setModelo(modelo){
        this.#modelo = modelo.toLowerCase()
    }

    get getModelo(){
        return this.#modelo
    }

   
    get getTipo(){
        return this.#tipo

    }
    set setEstado(estado){
        this.#estado = estado.toLowerCase()
    }

    get getEstado(){
        return this.#estado
    }

  
    get getCodigo(){
        return this.#codigo
    }



}

module.exports = Instrumento;