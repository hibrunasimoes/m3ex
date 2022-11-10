context('ControleEntradaSsaida', () => {
  it('adicionar2regristos', () => {
    //adicionar 2 registros

    cy.visit('kjdskds')
    cy.get('#txtN1').type('Carro')
    cy.get('#txtV1').type('25000')
    
    cy.get('#txtN2').type('Moto')
    cy.get('#txtV2').type('10000')

    cy.get('input').contains('Enviar').click()

    cy.get('table tbody tr').should('have.length', 3)

    cy.get('table tbody tr')
    .each((Sel, index, $list) => {
      if (index)
      cy.get(Sel).find('#pvalor')
      .invoke ('text').then(val1 =>(
        expect(val1).to.equal('25000')
      ))
    })
  });
  
});