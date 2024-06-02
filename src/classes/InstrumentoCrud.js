const fs = require("fs");
class InstrumentoCrud {
  constructor() {
    this.filePath = "./src/files/instrumentos.json";
  }

  /***************** CRIAR **********************/

  criar(instrumento) {
    const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));

    conteudoAtual.push({
      tipo: instrumento.getTipo,
      marca: instrumento.getMarca,
      modelo: instrumento.getModelo,
      estado: instrumento.getEstado,
      codigo: instrumento.getCodigo,
    });
    fs.writeFileSync(
      this.filePath,
      JSON.stringify(conteudoAtual, null, 2),
      "utf-8"
    );
  }

  /***************** CONSULTAR **********************/

  consultar(tipo, modelo) {
    const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));

    const instrumentoConsultado = conteudoAtual.find(
      (instrumento) =>
        instrumento.tipo === tipo && instrumento.modelo === modelo
    );

    if (instrumentoConsultado) {
      console.log(instrumentoConsultado);
      
    } else {
      console.log("Instrumento não encontrado!");
    }

    
  }

  /***************** DELETAR **********************/

  deletar(codigo) {
    let conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));

    if (conteudoAtual.find((instrumento) => instrumento.codigo === codigo)) {
      conteudoAtual = conteudoAtual.filter(
        (instrumento) => instrumento.codigo !== codigo
      );

      console.log("Instrumento excluído com sucesso!!!")

      fs.writeFileSync(
        this.filePath,
        JSON.stringify(conteudoAtual, null, 2),
        "utf-8"
      );
    } else {
      console.log("Código não encotrado!!!");
    }
  }
}

module.exports = InstrumentoCrud;
