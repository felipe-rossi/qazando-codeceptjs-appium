const { I } = inject();

module.exports = {

  buttons:{
    salvar: "~salvar"
  },

  campos:{
    codigo: '//android.widget.EditText[@content-desc="codigo"]',
    aluno: '//android.widget.EditText[@content-desc="aluno"]',
    procurar: '//android.widget.EditText[@content-desc="search"]'
  },

  textos:{
    alunoAdicionadoComSucesso: "Dados salvos!",
    alunosProcurados: ""
  },

  validarLogin(){
    //pause() essa função saervae como um Debug, conseguimos colcar funções tbm e ir testando cada uam delas // cli- history tem o histórico dos comandos executados no pause
    // retry(4) faz que uma determinada ação seja executado 4 vezes
    I.waitForElement(this.buttons.salvar, 5)
    I.seeElement(this.buttons.salvar)
  },

  adicionarEstudante(codigoAluno, nomeAluno){
      I.waitForElement(this.campos.codigo)
      I.tap(this.campos.codigo)
      I.fillField(this.campos.codigo,codigoAluno)

      I.tap(this.campos.aluno)
      I.fillField(this.campos.aluno,nomeAluno)

      I.tap(this.buttons.salvar)

      I.waitForElement(this.textos.alunoAdicionadoComSucesso)
      I.seeElement(this.textos.alunoAdicionadoComSucesso)
  },

  procurarAluno(codigoAluno, nomeAluno){
    I.tap(this.campos.procurar)
    I.fillField(this.campos.procurar, nomeAluno)

    I.waitForElement('//android.view.ViewGroup[@content-desc="'+codigoAluno+'"]/android.widget.TextView')
    I.seeElement('//android.view.ViewGroup[@content-desc="'+codigoAluno+'"]/android.widget.TextView')
  }
}
