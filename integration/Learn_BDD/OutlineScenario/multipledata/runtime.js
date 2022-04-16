import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps"

Given('Navigate to Practice Automation Site', () => {
    cy.visit('http://practice.automationtesting.in/my-account/');
})

And('user enters the registered {word}', (putUserName) => {
    cy.get('#username').type(putUserName)
})

And('user enters the created {word}', (putPassword) => {
    cy.get('#password').type(putPassword)
})

When('user clicks on login button', () => {
    cy.get('input[name="login"]').click()
})

Then('Validate Dashboard text', () => {
    cy.contains('Dashboard').should('have.text','Dashboard')
    // cy.get('.woocommerce-MyAccount-navigation-link--dashboard.is-active > a')
    // .should('have.text', 'Dashboard')
})