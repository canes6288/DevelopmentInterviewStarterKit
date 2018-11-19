/* globals describe */
/* globals it */
/* globals cy */

describe('duplicateTable', () => {
  it('shows potential duplicate table', () => {
    cy.visit('/');

    cy.getByTestId('duplicate-button')
      .children('button')
      .should('not.have.class', 'hidden');

    cy.getByText('Show Potential Duplicates based on Phone Numbers').click();

    cy.getByTestId('duplicate-button')
      .children('button')
      .should('have.class', 'hidden');

    cy.getByTestId('duplicate-table')
      .children('div.ReactTable')
      .should('not.have.class', 'hidden');
  });
});
