Feature('estudantes');

const {I, loginPage, homePage} = inject()
const geradorNumeros = require("./Utils/geradorDeNumeros.js")
const geradorNomes = require("./Utils/geradorDeNomes.js")


Scenario('Adicionar estudante com sucesso', () => {
    loginPage.fazerLogin("teste@teste.com", "123456")
    homePage.adicionarEstudante(geradorNumeros.gerarNumeroAleatorio(), geradorNomes.gerarNomeAleatorio())
});

Scenario('Procurar aluno com sucesso', () => {
    loginPage.fazerLogin("teste@teste.com", "123456")
    homePage.procurarAluno("66525", "Clarise Falcão")
});
