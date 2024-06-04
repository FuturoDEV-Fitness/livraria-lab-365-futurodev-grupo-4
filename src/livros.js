const readline = require('readline');

const LivroCrud = require('./classes/LivroCrud');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function run() {
  const livroCrud = new LivroCrud('./src/files/livros.json');
  const resposta = await new Promise(resolve => rl.question('Escolha uma ação (criar, deletar, consultar, atualizar): ', resolve));

  switch (resposta) {
    case 'criar': {
      const nome = await new Promise(resolve => rl.question('Digite o nome do livro: ', resolve));
      const quantidadePaginas = parseInt(await new Promise(resolve => rl.question('Digite a quantidade de páginas do livro: ', resolve)), 10);
      const genero = await new Promise(resolve => rl.question('Digite o gênero do livro: ', resolve));
      const autor = await new Promise(resolve => rl.question('Digite o autor do livro: ', resolve));

      const novoLivro = livroCrud.criarLivro(nome, quantidadePaginas, genero, autor);
      console.log('Livro criado com sucesso:', novoLivro);
      rl.close();
      break;
    }

    case 'deletar': {
      const codigoDeletar = await new Promise(resolve => rl.question('Digite o código do livro a ser deletado: ', resolve));
      const resultado = livroCrud.deletarLivro(codigoDeletar);
      if (resultado) {
        console.log('Livro deletado com sucesso!');
      } else {
        console.log('Livro não encontrado.');
      }
      rl.close();
      break;
    }

    case 'consultar': {
      const codigoConsultar = await new Promise(resolve => rl.question('Digite o código do livro a ser consultado: ', resolve));
      const livro = livroCrud.lerLivro(codigoConsultar);
      if (livro) {
        console.log('Livro encontrado:', livro);
      } else {
        console.log('Livro não encontrado.');
      }
      rl.close();
      break;
    }

    case 'deletar': {
      const livrosAntes = livroCrud.getLivros(); 
      console.log('Livros antes de deletar:', livrosAntes); 

      const codigoDeletar = await new Promise(resolve => rl.question('Digite o código do livro a ser deletado: ', resolve));
      const resultado = livroCrud.deletarLivro(codigoDeletar);

      const livrosDepois = livroCrud.getLivros(); 
      console.log('Livros depois de deletar:', livrosDepois); 

      if (resultado) {
        console.log('Livro deletado com sucesso!');
      } else {
        console.log('Livro não encontrado.');
      }
      rl.close();
      break;
    }
    case 'atualizar': {
      const codigoAtualizar = await new Promise(resolve => rl.question('Digite o código do livro a ser atualizado: ', resolve));
      const livro = livroCrud.lerLivro(codigoAtualizar);
      if (livro) {
        const nome = await new Promise(resolve => rl.question(`Digite o novo nome do livro (${livro.nome}): `, resolve)) || livro.nome;
        const quantidadePaginas = parseInt(await new Promise(resolve => rl.question(`Digite a nova quantidade de páginas do livro (${livro.quantidadePaginas}): `, resolve)), 10) || livro.quantidadePaginas;
        const genero = await new Promise(resolve => rl.question(`Digite o novo gênero do livro (${livro.genero}): `, resolve)) || livro.genero;
        const autor = await new Promise(resolve => rl.question(`Digite o novo autor do livro (${livro.autor}): `, resolve)) || livro.autor;

        livro.nome = nome;
        livro.quantidadePaginas = quantidadePaginas;
        livro.genero = genero;
        livro.autor = autor;

        livroCrud.atualizarLivro(livro);
        console.log('Livro atualizado com sucesso!');
      } else {
        console.log('Livro não encontrado.');
      }
      rl.close();
      break;
    }

    default:
      console.log("Ação não reconhecida.");
      rl.close();
  }
}

run();