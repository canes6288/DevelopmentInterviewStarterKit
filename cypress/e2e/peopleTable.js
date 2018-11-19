/* globals describe */
/* globals it */
/* globals cy */

describe('peopleTable', () => {
  it('shows people table', () => {
    cy.visit('/');

    cy.getByTestId('people-table')
      .get('div.ReactTable')
      .should('be.visible');
  });
});
