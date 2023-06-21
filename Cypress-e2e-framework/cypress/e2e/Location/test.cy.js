describe('Wingo test', function() {
    beforeEach(function() {

      cy.viewport(1920, 1080);

      cy.on('uncaught:exception', () => {
        // Hacer algo con el error, por ejemplo, imprimirlo en la consola
        // console.log('Uncaught exception:', error);
        return false; // Evita que la prueba falle
      });
      cy.visit("https://www.wingo.com/");
    });

    it('should have title Wingo', function () {
      cy.title().should('include', 'Wingo');
  });
    

    it('fill in flight information', function () {
    cy.get('.input-origen > .select-drop > .info-airport > .select > .styledSelect').click({ force: true });
    cy.get('[data-cod="BOG"]').click();
    cy.get('#comboDestino > [data-cod="CLO"]').click();

    cy.get('body > div:nth-child(2) > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(5) > div:nth-child(1)').click({force: true});
    cy.get('#date-window-container > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month2 > tbody > :nth-child(6) > td > .day').click({force: true});

    cy.get('#selectPasj > .info-airport').click();
    cy.get('body > div:nth-child(2) > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2)').click({force: true});
    cy.get('.styledSelect.styledSelectMoneda').click();
    cy.get('#currencies > :nth-child(2)').click();
    
    cy.get('.btn-search').click();
});


});
