const crypto = require("crypto");


class Instrumento {

    #marca = ''
    #modelo = ''
    #tipo = ''
    #estado = ''
    #codigo = ''

    constructor(tipo) {
       this.#tipo = tipo
       this.#codigo = crypto.randomUUID();
    }

    set setMarca(marca){
        this.#marca = marca
    }

    get getMarca(){
        return this.#marca
    }

    set setModelo(modelo){
        this.#modelo = modelo
    }

    get getModelo(){
        return this.#modelo
    }

    set setTipo(tipo){
        this.#tipo = tipo

    }

    get getTipo(){
        return this.#tipo

    }
    set setEstado(estado){
        this.#estado = estado
    }

    get getEstado(){
        return this.#estado
    }

  
    get getCodigo(){
        return this.#codigo
    }



}

module.exports = Instrumento;