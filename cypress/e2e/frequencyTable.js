/* globals describe */
/* globals it */
/* globals cy */

describe('frequencyTable', () => {
  it('shows email character frequency table', () => {
    cy.visit('/');

    cy.getByTestId('character-frequency-button')
      .children('button')
      .should('not.have.class', 'hidden');

    cy.getByText('Show Email Character Frequency').click();

    cy.getByTestId('character-frequency-button')
      .children('button')
      .should('have.class', 'hidden');

    cy.getByTestId('character-frequency-table')
      .children('div.ReactTable')
      .should('not.have.class', 'hidden');
  });
});
