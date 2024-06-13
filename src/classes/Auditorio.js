const crypto = require("crypto"); 

class Auditorio {
    #codigo = "";
    #nome = "";
    #descricao = "";
    #quantidade = 0;

    constructor(nome, descricao, quantidade) {
        this.#codigo = crypto.randomUUID();
        this.#nome = nome;
        this.#descricao = descricao;
        this.#quantidade = quantidade;
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(value) {
        this.#codigo = value;
    }

    get nome() {
        return this.#nome;
    }

    set nome(value) {
        this.#nome = value;
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(value) {
        this.#descricao = value;
    }

    get quantidade() {
        return this.#quantidade;
    }

    set quantidade(value) {
        this.#quantidade = value;
    }

    toJSON() {
        return {
            codigo: this.codigo,
            nome: this.nome,
            descricao: this.descricao,
            quantidade: this.quantidade
        };
    }
}

module.exports = Auditorio;
