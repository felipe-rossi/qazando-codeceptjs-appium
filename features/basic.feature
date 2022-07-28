Feature: Login
 Eu como usario
 gostaria de fazer o login na aplicação
 para acessar o sistema
 

  Scenario: Login com sucesso
    Given eu preencho email
    And eu preencho senha
    When eu clico no button Entrar
    Then eu vejo o button Salvar
