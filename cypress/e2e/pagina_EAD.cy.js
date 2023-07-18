const page = require("../pages/page");

describe('Acessos ao Menu', () => {
  beforeEach(function () {
    cy.visit("");
    page.cookieAceitar()
  })

  it('Acessar a página Análise e Desenvolvimento de Sistemas (EaD Premium)', () => {
    page.menuCursos()
    page.submenuGraduacao()
    page.cursoADSclicavel()
    page.validacaoCursoADS()
  })

})