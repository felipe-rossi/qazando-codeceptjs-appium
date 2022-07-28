const { I } = inject();
// Add in your custom step files

    //Preencher o campo email
    I.fillField(this.fields.email, email)

    //preenhcer o campo senha
    I.fillField(this.fields.senha, senha)

    //clicar no botão entrar
    I.tap(this.buttons.entrar)


Given('eu preencho email', () => {
  // From "features\basic.feature" {"line":8,"column":5}
  throw new Error('Not implemented yet');
});

Given('eu preencho senha', () => {
  // From "features\basic.feature" {"line":9,"column":5}
  throw new Error('Not implemented yet');
});

When('eu clico no button Entrar', () => {
  // From "features\basic.feature" {"line":10,"column":5}
  throw new Error('Not implemented yet');
});

Then('eu vejo o button Salvar', () => {
  // From "features\basic.feature" {"line":11,"column":5}
  throw new Error('Not implemented yet');
});
