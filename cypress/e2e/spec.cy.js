/// <reference types="cypress" />

describe('Ongs', () => {
  it('realizar cadastro', () => {

  
    

    cy.visit('https://bethehero-frontend.netlify.app/');
    cy.get('.back-link').click();
    cy.get('[placeholder="Nome da ONG"]').type('super animais');
    cy.get('[type="email"]').type('superanimais@gmail.com');
    cy.get('[placeholder="Whatsapp"]').type('51998554477');
    cy.get('[placeholder="Cidade"]').type('Nova Santa Rita');
    cy.get('[placeholder="UF"]').type('RS');
    

    cy.get('.button').click();

  });
   
  it('realizar login'), () => {
    // aplicação com problemas no backend não possibilitando esse teste.


  }


});