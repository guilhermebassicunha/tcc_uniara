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

  it('Acessar o menu Vestibular e Inscrições', () => {
    page.menuVestibular()
    page.submenuInscricoes()
    page.validacaoIncricao()
  })

  it('Acessar o menu Aluno', () => {
    page.menuAluno()
    page.validacaoMenuAlunoAberto()
    page.preencherCodigo_e_senha_aluno()
  })
})