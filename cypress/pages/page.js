module.exports = {

    //Dados
    codigo: '321321',
    senha: '123123',

    //Botãoes
    botaoCookies: '.botao',

    //Menu
    cursosMenu: '#menu-principal > :nth-child(1) > :nth-child(1) > .grupo',
    vestibularMenu: '#menu-principal > :nth-child(1) > :nth-child(2) > .grupo',
    alunoMenu: '#menu-acesso > :nth-child(1) > :nth-child(1) > .grupo',

    //Submenu
    menuGraduacao: '#menu-aberto > :nth-child(2) > :nth-child(2) > a',
    menuIncricoes: '#menu-aberto > :nth-child(1) > :nth-child(2) > a',

    //Clicáveis
    cursoADS: '//strong[text()="Análise e Desenvolvimento de Sistemas"]',

    //Campos
    codigoAluno: '#menu-aberto > .dupla > form > [type="text"]',
    senhaAluno: '#menu-aberto > .dupla > form > [type="password"]',

    //Validações
    validacao_CursoADS: 'Análise e Desenvolvimento de Sistemas (EaD Premium)',
    validacao_Incricao: 'INICIAR INSCRIÇÃO NO VESTIBULAR',
    validacao_MenuAluno: '#menu-aberto > .dupla > form > .sublink',



    // Acessar a página Análise e Desenvolvimento de Sistemas (EaD Premium)
    cookieAceitar(){
        // cy.wait(2000)
        cy.get(this.botaoCookies).click({forde: true})
    },

    menuCursos(){
        cy.get(this.cursosMenu).click()
    },

    submenuGraduacao(){
        cy.get(this.menuGraduacao).click()
    },

    cursoADSclicavel(){
        cy.xpath(this.cursoADS).click()
    },

    validacaoCursoADS(){
        cy.contains(this.validacao_CursoADS).should('be.visible')
    },


    // Acessar o menu Vestibular e Inscrições
    menuVestibular(){
        cy.get(this.vestibularMenu).click()
    },

    submenuInscricoes(){
        cy.get(this.menuIncricoes).click()
    },

    validacaoIncricao(){
        cy.contains(this.validacao_Incricao).should('be.visible')
    },


    //Acessar o menu Aluno
    menuAluno(){
        cy.get(this.alunoMenu).click()
    },

    validacaoMenuAlunoAberto(){
        cy.get(this.validacao_MenuAluno).should('be.visible')
    },

    preencherCodigo_e_senha_aluno(){
        cy.get(this.codigoAluno).type(this.codigo)
        cy.get(this.senhaAluno).type(this.senha)
    }
};