Feature('login');

//Incluindo o loginPage Globalmente, assim não precisa incluir em cada cenário
const {loginPage} = inject()
const {homePage} = inject()



Before(() =>{

    console.log("Before executando antes de cada cenário!!!")

});

After(() =>{
    console.log("After executando Depois de cada cenário!!!")
});


Scenario('Login com sucesso', ({ I, loginPage }) => {
    loginPage.fazerLogin("teste@teste.com", "123456")
    homePage.validarLogin()
});

Scenario('Login com erro', ({ I, loginPage }) => {
    loginPage.fazerLogin("xteste@teste.com", "123456")
    loginPage.validarLoginErrado()
});

