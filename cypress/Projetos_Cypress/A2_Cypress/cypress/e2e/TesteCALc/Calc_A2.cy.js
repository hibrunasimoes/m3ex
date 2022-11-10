// criar contexto e cenario de teste
// mapear os elementos no console do google
// criar o cy.get e depois abrir o cypress
// fazer as intreacoes
// #c limpa

context ("testesCal", () => {
  it('teste1+2', () => {
    cy.visit('https://www.calculadora-online.xyz/')
    cy.get('#un').click()
    cy.get('#addition').click()
    cy.get('#deux').click()
    cy.get('#egale').click()
    // cy.get('#C').click()
  });
  it('teste2+2', () => {
    cy.visit('https://www.calculadora-online.xyz/')
    cy.get('#deux').click()
    cy.get('#addition').click()
    cy.get('#deux').click()
    cy.get('#egale').click()
  });
  it('teste6+1', () => {
    cy.visit('https://www.calculadora-online.xyz/')
    cy.get('#six').click()
    cy.get('#addition').click()
    cy.get('#un').click()
    cy.get('#egale').click()
  });  it('teste11+3', () => {
    cy.visit('https://www.calculadora-online.xyz/')
    cy.get('#un').click()
    cy.get('#un').click()
    cy.get('#addition').click()
    cy.get('#trois').click()
    cy.get('#egale').click()
  });
  it('teste7-2', () => {
    cy.visit('https://www.calculadora-online.xyz/')
    cy.get('#sept').click()
    cy.get('#moins').click()
    cy.get('#deux').click()
    cy.get('#egale').click()
  });
  it('teste10-5', () => {
    cy.visit('https://www.calculadora-online.xyz/')
    cy.get('#un').click()
    cy.get('#zero').click()
    cy.get('#moins').click()
    cy.get('#cinq').click()
    cy.get('#egale').click()
  });
  it('teste3*2', () => {
    cy.visit('https://www.calculadora-online.xyz/')
    cy.get('#trois').click()
    cy.get('#multiplier').click()
    cy.get('#deux').click()
    cy.get('#egale').click()
  });
  it('teste8*4', () => {
    cy.visit('https://www.calculadora-online.xyz/')
    cy.get('#huit').click()
    cy.get('#multiplier').click()
    cy.get('#quatre').click()
    cy.get('#egale').click()
  });
  it('teste6/2', () => {
    cy.visit('https://www.calculadora-online.xyz/')
    cy.get('#six').click()
    cy.get('#diviser').click()
    cy.get('#deux').click()
    cy.get('#egale').click()
  });
  it('teste20/5', () => {
    cy.visit('https://www.calculadora-online.xyz/')
    cy.get('#deux').click()
    cy.get('#zero').click()
    cy.get('#diviser').click()
    cy.get('#cinq').click()
    cy.get('#egale').click()
  });
}) ;