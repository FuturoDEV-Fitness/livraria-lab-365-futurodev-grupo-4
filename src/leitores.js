const readline = require('readline/promises');
const Leitor = require('./classes/Leitor');
const LeitorCrud = require('./classes/LeitorCrud');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            
            const nome = await rl.question("Qual o nome do leitor?")
            const cpf = await rl.question("Qual o CPF do leitor?")
            const dataNascimento = await rl.question("Qual o data de nascimento do leitor?")
            
            const leitor = new Leitor(nome)
            //novoLeitor.setNome = nome
            leitor.setCpf = cpf
            leitor.setDataNascimento = dataNascimento

        
            const crud = new LeitorCrud()
            crud.criar(leitor)
            
            rl.close();
            break;
        case 'deletar': {
            const codigo  = await rl.question("Qual o código do leitor que você deseja excluir?")

            const crud = new LeitorCrud()
            crud.deletar(codigo)

            rl.close();
            break;
        }
        case 'consultar': {
            const palavraPesquisada  = await rl.question("Qual o leitor que você deseja consultar?")

            const crud = new LeitorCrud()
            crud.consultar(palavraPesquisada)

            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
