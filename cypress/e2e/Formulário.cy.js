let cadastroJaRealizado = false;
beforeEach(() => {
    // Visitar a página de cadastro antes de cada teste
    cy.visit('https://adopet-frontend-cypress.vercel.app/mensagem')
  })

  
  describe('Formulário de mensagem', () => {
    it('Preencher o formulário de mensagem com mais de 500 caracteres no campo “Mensagem”', () => {
      
        //realizando login
        cy.get('#email').type('julio@gmail.com')
        cy.get('#pass').type('SuaSenhaAqui1')
        cy.get('[data-test="submit-button"]').click()
  
        cy.get(':nth-child(1) > .card__contact').click()
  
        //Preenchendo o formulário com mais de 500 caracteres no campo “Mensagem”
        cy.get('#name').type('julio Santos')
        cy.get('#phone').type('619967896590')
        cy.get('#petName').type('Dunga')
        cy.get('#msg').type('Olá, tudo bem? Estou curioso para saber mais sobre o Dunga. Ele é um cachorro tão especial! Como ele está se adaptando ao ambiente? Quais são as características dele? Dunga é mais brincalhão ou prefere momentos de tranquilidade? Eu adoraria saber sobre as coisas que ele mais gosta de fazer, se ele tem alguma rotina especial ou se tem algum brinquedo favorito. Além disso, como ele se comporta com outras pessoas e animais? Estou muito interessado em conhecer melhor o Dunga e ouvir mais histórias sobre ele.')
        cy.get('[data-test="submit-button"]').click()
        cy.contains('p.error', 'O número máximo de caracteres é 500')

      })

      it('Validar o histórico de mensagens enviadas', () => {
      
        //realizando login
        cy.get('#email').type('julio@gmail.com')
        cy.get('#pass').type('SuaSenhaAqui1')
        cy.get('[data-test="submit-button"]').click()
  
        cy.get(':nth-child(1) > .card__contact').click()
  
        //Validar mensagens já enviadas
        cy.get('ul.enviadas li').contains('Gostaria de saber se todas as vacinas foram aplicadas no animal').should('be.visible')
      })
   
})