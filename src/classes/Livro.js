class Livro {
    #codigo
    #nome
    #quantidadePaginas
    #genero
    #autor

    constructor(nome, quantidadePaginas, genero, autor) {
        this.#codigo = crypto.randomUUID();
        this.#nome = nome;
        this.#quantidadePaginas = quantidadePaginas;
        this.#genero = genero;
        this.#autor = autor;
    }

    get codigo() {
        return this.#codigo;
    }

    get nome() {
        return this.#nome;
    }

    get quantidadePaginas() {
        return this.#quantidadePaginas;
    }

    get genero() {
        return this.#genero;
    }

    get autor() {
        return this.#autor;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    set quantidadePaginas(quantidadePaginas) {
        this.#quantidadePaginas = quantidadePaginas;
    }

    set genero(genero) {
        this.#genero = genero;
    }

    set autor(autor) {
        this.#autor = autor;
    }
}

module.exports = Livro;
