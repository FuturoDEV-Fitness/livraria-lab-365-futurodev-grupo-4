const fs = require('fs');
const path = require('path');
const Livro = require('./Livro');

class LivroCrud {
  constructor() {
    this.filePath = './src/files/livros.json';
  }

  getLivros() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Erro ao ler o arquivo de livros:', error);
      return [];
    }
  }

  saveLivros(livros) {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(livros, null, 2));
      console.log('Livros salvos com sucesso.');
    } catch (error) {
      console.error('Erro ao salvar os livros:', error);
    }
  }

  criarLivro(nome, quantidadePaginas, genero, autor) {
    const novoLivro = {
      codigo: crypto.randomUUID(),
      nome,
      quantidadePaginas,
      genero,
      autor
    };

    const livros = this.getLivros();
    livros.push(novoLivro);
    this.saveLivros(livros);

    return novoLivro;
  }

  deletarLivro(codigo) {
    let livros = this.getLivros();
    const initialLength = livros.length;
    livros = livros.filter(livro => livro.codigo !== codigo);
    if (initialLength !== livros.length) {
      this.saveLivros(livros);
      return true;
    }
    return false;
  }

  lerLivro(codigo) {
    const livros = this.getLivros();
    return livros.find(livro => livro.codigo === codigo);
  }
  atualizarLivro(livroAtualizado) {
    let livros = this.getLivros();
    const index = livros.findIndex(livro => livro.codigo === livroAtualizado.codigo);
    if (index !== -1) {
      livros[index] = livroAtualizado;
      this.saveLivros(livros);
      return true;
    }
    return false;
  }
}

module.exports = LivroCrud;