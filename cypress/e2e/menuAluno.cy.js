const page = require("../pages/page");

describe('Acessos ao Menu', () => {
  beforeEach(function () {
    cy.visit("");
    page.cookieAceitar()
  })

  it('Acessar o menu Aluno', () => {
    page.menuAluno()
    page.validacaoMenuAlunoAberto()
    page.preencherCodigo_e_senha_aluno()
  })
})