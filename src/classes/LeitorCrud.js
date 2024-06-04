const fs = require("fs");

class LeitorCrud { 

    constructor() {
        this.filePath = "./src/files/leitores.json";
    }

    criar(novoLeitor){

        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))

        conteudoAtual.push({
            codigo: novoLeitor.getCodigo,
            nome: novoLeitor.getNome,
            cpf:  novoLeitor.getCpf,
            dataNascimento: novoLeitor.getDataNascimento
         })

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoAtual, null, 2),
            'utf-8'
        )
    }

    consultar(palavraPesquisada){

        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))

        const leitorEncontrado = conteudoAtual.find(leitor => leitor.nome === palavraPesquisada || leitor.codigo === palavraPesquisada)

        if(leitorEncontrado) {
            console.log(leitorEncontrado)
        } else {
            console.log("Leitor não encontrado.")
        }

    }

    async deletar(codigo){

        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))

        const leitorEncontrado = conteudoAtual.find((leitor) => leitor.codigo === codigo)
        if(leitorEncontrado){
            const leitoresAtuais = conteudoAtual.filter((leitor) => leitor.codigo !== codigo)
            console.log("Leitor excluído com sucesso!")
             fs.writeFileSync(
            this.filePath,
            JSON.stringify(leitoresAtuais, null, 2),
            'utf-8'
        ) 
        } else{
            console.log("Leitor não encontrado.")
        }

        
       
    }

}

module.exports = LeitorCrud;