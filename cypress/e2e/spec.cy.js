it('Searching on google should open search results page', () => {

  //arrange
  const searchString = 'Maskim said Hello'


  // act
  // Visit Google homepage

  cy.visit('https://google.com')

  // Type search keyword and submit
  cy.get('[title="Otsi"]').type(searchString).type('{enter}')

  //assert
  // Verify search results page is displayed
  cy.url().should('include' , 'google.com/search')
  cy.get('#search').should('be.visible')

  // Verify search result links are visible
  cy.wait(5000)
  cy.get('div.g').should('have.length.at.least', 8)
  cy.get('div.g').each((result) => {
    cy.wrap(result).find('a').should('be.visible')
  })

})

/* 
There are five assertions in total:

Verify search results page is displayed.
Verify the search results page URL includes 'google.com/search'.
Verify the search box is visible.
Verify that there are at least 8 search results on the page.
Verify that each search result has a visible link.

*/