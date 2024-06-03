const readline = require('readline/promises');
const Instrumento = require('./classes/Instrumento');
const InstrumentoCrud = require('./classes/InstrumentoCrud');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const tipo = await rl.question("Qual tipo de instrumento(violão, guitarra, baixo, teclado...)? ");
            const marca = await rl.question("Qual a marca do instrumento? ");
            const modelo = await rl.question("Qual o modelo? ");
            const estado = await rl.question("Qual o estado do instrumento(novo, usado)? ");

            const instrumento = new Instrumento(tipo)
            instrumento.setMarca = marca;
            instrumento.setModelo = modelo;
            instrumento.setEstado = estado;
            
            const instrumentoCrud = new InstrumentoCrud()
            instrumentoCrud.criar(instrumento)
           
            rl.close();
            break;
        case 'deletar': {
            const codigo = await rl.question("Informe o código do instrumento a ser deletado: ")

            const instrumentoCrud = new InstrumentoCrud()

            instrumentoCrud.deletar(codigo)

            rl.close();
            break;
        }
        case 'consultar': {
          const tipo =  await rl.question("Informe o tipo do instrumento(violão, guitarra, baixo, teclado...)? ");
          const modelo = await rl.question("Qual o modelo? ");

          const instrumentoCrud = new InstrumentoCrud()

          instrumentoCrud.consultar(tipo.toLowerCase(), modelo.toLowerCase())

            rl.close();
            break;
        }

        case 'alterar': {
            const codigo = await rl.question("Informe o código do produto que deseja alterar: ")
            const tipo =  (await rl.question("Informe o tipo do instrumento que deseja incluir: (violão, guitarra, baixo, teclado...)? ")).toLocaleLowerCase()
            const marca = (await rl.question("Qual a marca do instrumento? ")).toLocaleLowerCase()
            const modelo = (await rl.question("Qual o modelo? ")).toLocaleLowerCase()
            const estado = (await rl.question("Qual o estado do instrumento(novo, usado)? ")).toLocaleLowerCase()

            const instrumentoCrud = new InstrumentoCrud()
            instrumentoCrud.alterar(codigo, tipo, marca, modelo, estado)

            rl.close();
            break;

        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
