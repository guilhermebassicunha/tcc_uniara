const page = require("../pages/page");

describe('Acessos ao Menu', () => {
  beforeEach(function () {
    cy.visit("");
    page.cookieAceitar()
  })

  it('Acessar o menu Vestibular e Inscrições', () => {
    page.menuVestibular()
    page.submenuInscricoes()
    page.validacaoIncricao()
  })

})