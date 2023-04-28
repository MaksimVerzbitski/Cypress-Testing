/* 

This test validates the login functionality with valid credentials.
It asserts that the username and password input fields contain the expected values, and that they match a certain regular expression pattern.
It also asserts that after clicking the login button, the resulting URL includes the expected path to the dashboard page

*/

describe('Validate login Functionality', () => {

  it('Validate login with valid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');

      // Assert that the username input contains 'Admin'
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', 'Admin');

    // Assert that the password input contains 'admin123'
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', 'admin123');

    const latinRegex = /^[a-zA-Z\d]+$/;
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').invoke('val').should('match', latinRegex);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').invoke('val').should('match', latinRegex);

    cy.get('.oxd-button').click();
    
    cy.url().should('include', 'index.php/dashboard/index');
    
  })
})
