import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email()
const invalidEmail = faker.lorem.word()

beforeEach(() => {
  // Visitar a página de cadastro antes de cada teste
  cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro')
})

describe('Realizar o cadastro', () => {
  it('Cadastro', () => {
    

    cy.get('#name').type('Julio')
    cy.get('#email').type(randomEmail)
    cy.get('#pass-create').type('SuaSenhaAqui1')
    cy.get('#pass-confirm').type('SuaSenhaAqui1')
    cy.get('[data-test="submit-button"]').click()
    // Verificar se a mensagem "Já tem conta? Faça seu login:" aparece
    cy.contains('p', 'Já tem conta? Faça seu login:').should('be.visible')
  })

  it('Cadastro com senha invalida', () => {


    cy.get('#name').type('Julio')
    cy.get('#email').type(randomEmail)
    cy.get('#pass-create').type('123456')
    cy.get('#pass-confirm').type('123456')
    cy.get('[data-test="submit-button"]').click()
   // Verificar se a mensagem de erro de senha aparece
   cy.contains('p.error', 'A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres')
   .should('be.visible')
  
  })

  it('Cadastrar usuário com email invalido', () => {


    cy.get('#name').type('Julio')
    cy.get('#email').type(invalidEmail)
    cy.get('#pass-create').type('SuaSenhaAqui1')
    cy.get('#pass-confirm').type('SuaSenhaAqui1')
    cy.get('[data-test="submit-button"]').click()
   // Verificar se a mensagem de erro de email aparece
   cy.contains('p.error', 'Por favor, verifique o email digitado')
   .should('be.visible')
  
  })
})
  