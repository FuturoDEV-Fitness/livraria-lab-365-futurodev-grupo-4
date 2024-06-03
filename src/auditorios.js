const readline = require('readline/promises');
const AuditorioCrud = require('./classes/AuditorioCrud.js');
const Auditorio = require('./classes/Auditorio.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function perguntar(dica) {
    return rl.question(dica);
}

async function criarAuditorio(auditorioCrud) {
    const nome = await perguntar('Digite o nome do auditório: ');
    const descricao = await perguntar('Digite a descrição do auditório: ');
    const quantidade = await perguntar('Digite a quantidade de pessoas suportadas: ');

    const auditorio = new Auditorio(nome, descricao, parseInt(quantidade));
    auditorioCrud.criar(auditorio);

    console.log('Auditório criado com sucesso!');
}

async function deletarAuditorio(auditorioCrud) {
    const codigo = await perguntar('Digite o código do auditório que deseja deletar: ');

    const auditorio = auditorioCrud.consultar(codigo);
    if (auditorio) {
        auditorioCrud.deletar(codigo);
        console.log('Auditório deletado com sucesso!');
    } else {
        console.log('Auditório não encontrado.');
    }
}

async function consultarAuditorio(auditorioCrud) {
    const codigo = await perguntar('Digite o código do auditório que deseja consultar: ');

    const auditorio = auditorioCrud.consultar(codigo);
    if (auditorio) {
        console.log(`Auditório encontrado: ${JSON.stringify(auditorio, null, 2)}`);
    } else {
        console.log('Auditório não encontrado.');
    }
}

async function atualizarAuditorio(auditorioCrud) {
    const codigo = await perguntar('Digite o código do auditório que deseja atualizar: ');

    const auditorio = auditorioCrud.consultar(codigo);
    if (auditorio) {
        const nome = await perguntar(`Digite o novo nome do auditório (atual: ${auditorio.nome}): `);
        const descricao = await perguntar(`Digite a nova descrição do auditório (atual: ${auditorio.descricao}): `);
        const quantidade = await perguntar(`Digite a nova quantidade de pessoas suportadas (atual: ${auditorio.quantidade}): `);

        const novosDados = {
            nome: nome || auditorio.nome,
            descricao: descricao || auditorio.descricao,
            quantidade: quantidade ? parseInt(quantidade) : auditorio.quantidade
        };

        const auditorioAtualizado = auditorioCrud.atualizar(codigo, novosDados);
        console.log('Auditório atualizado com sucesso!');
        console.log(`Auditório atualizado: ${JSON.stringify(auditorioAtualizado, null, 2)}`);
    } else {
        console.log('Auditório não encontrado.');
    }
}

async function run() {
    const auditorioCrud = new AuditorioCrud();
    const resposta = await perguntar('Escolha uma ação (criar, deletar, consultar, atualizar): ');

    switch (resposta) {
        case 'criar':
            await criarAuditorio(auditorioCrud);
            break;
        case 'deletar':
            await deletarAuditorio(auditorioCrud);
            break;
        case 'consultar':
            await consultarAuditorio(auditorioCrud);
            break;
        case 'atualizar':
            await atualizarAuditorio(auditorioCrud);
            break;
        default:
            console.log("Ação não reconhecida.");
    }

    rl.close();
}

run();
