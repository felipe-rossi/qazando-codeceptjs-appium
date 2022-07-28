const { I } = inject();


module.exports = {

  fields:{
    email: "~email",
    senha: "~senha"
  },

  buttons:{
    entrar: "~entrar"
  },

  textos:{
    TxtfalhaLogin: "~lognFail"
  },

  fazerLogin(email, senha){

    //Preencher o campo email
    I.fillField(this.fields.email, email)

    //preenhcer o campo senha
    I.fillField(this.fields.senha, senha)

    //clicar no botão entrar
    I.tap(this.buttons.entrar)

  },

  validarLoginErrado(){

    //validar login
    I.waitForElement(this.textos.TxtfalhaLogin, 5) //App foi deseonvildo em ReactNative, então ele transforma o Name em accessibility id
    I.seeElement(this.textos.TxtfalhaLogin) //App foi deseonvildo em ReactNative, então ele transforma o Name em accessibility id
  }

}
