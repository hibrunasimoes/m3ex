// type a gente insere os valores dentro dos inputs
// contains verifica se o valor contem dentro do objeto
context('testesCalcSimples', () => {
  it('cal1+2', () => {
    cy.visit('dskdks')

    cy.get('#txtN1').type('1')
    cy.get('#txtN2').type('2')
    cy.get('input').contains('Calcular').click()
  });
  it('calc123+234', () => {
    cy.visit('dskdks')
    cy.get('#txtN1').type(134)
    cy.get('#txtN2').type(224)
    cy.get('input').contains('Calcular').click()
  });
  it('calc10000+-2346', () => {
    cy.visit('dskdks')
    cy.get('#txtN1').type(10000)
    cy.get('#txtN2').type(2346)
    cy.get('input').contains('Calcular').click()
  });
  it('calc-45-45', () => {
    cy.visit('dskdks')
    cy.get('#txtN1').type(45)
    cy.get('#rbfuncao_1')
    cy.get('#txtN2').type(45)
    cy.get('input').contains('Calcular').click()
  });
  it('calc100-14', () => {
    cy.visit('dskdks')
    cy.get('#txtN1').type(100)
    cy.get('#rbfuncao_1')
    cy.get('#txtN2').type(34)
    cy.get('input').contains('Calcular').click()
  });
  it('calc2x6', () => {
    cy.visit('dskdks')
    cy.get('#txtN1').type(2)
    cy.get('#rbfuncao_2')
    cy.get('#txtN2').type(16)
    cy.get('input').contains('Calcular').click()
  });
  it('calc2x6', () => {
    cy.visit('dskdks')
    cy.get('#txtN1').type(2)
    cy.get('#rbfuncao_2')
    cy.get('#txtN2').type(16)
    cy.get('input').contains('Calcular').click()
  });
  it('calc2/6', () => {
    cy.visit('dskdks')
    cy.get('#txtN1').type(2)
    cy.get('#rbfuncao_3')
    cy.get('#txtN2').type(16)
    cy.get('input').contains('Calcular').click()
  });
});