const fs = require("fs");
const Auditorio = require("./Auditorio");

class AuditorioCrud {
    constructor() {
        this.filePath = "./src/files/auditorios.json";
    }

    lerArquivo() {
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath, "utf-8");
            return JSON.parse(data).map(
                (item) => {
                    const auditorio = new Auditorio(item.nome, item.descricao, item.quantidade);
                    auditorio.codigo = item.codigo;
                    return auditorio;
                }
            );
        }
        return [];
    }

    escreverArquivo(data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data.map(item => item.toJSON()), null, 2), "utf-8");
    }

    criar(auditorio) {
        const auditorios = this.lerArquivo();
        auditorios.push(auditorio);
        this.escreverArquivo(auditorios);
    }

    consultar(codigo) {
        const auditorios = this.lerArquivo();
        return auditorios.find((item) => item.codigo === codigo);
    }

    deletar(codigo) {
        const auditorios = this.lerArquivo().filter((item) => item.codigo !== codigo);
        this.escreverArquivo(auditorios);
    }

    atualizar(codigo, novosDados) {
        const auditorios = this.lerArquivo();
        const index = auditorios.findIndex((item) => item.codigo === codigo);

        if (index !== -1) {
            if (novosDados.nome) auditorios[index].nome = novosDados.nome;
            if (novosDados.descricao) auditorios[index].descricao = novosDados.descricao;
            if (novosDados.quantidade) auditorios[index].quantidade = novosDados.quantidade;
            this.escreverArquivo(auditorios);
            return auditorios[index];
        }

        return null;
    }
}

module.exports = AuditorioCrud;
