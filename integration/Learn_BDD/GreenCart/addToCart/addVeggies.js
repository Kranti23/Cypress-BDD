import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("open the E-commerce site", () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

And("Type for the product name which starts from 'ca' in the search box", () => {
    cy.get('input.search-keyword').type('ca')
    cy.get('button[type="submit"]').click()
})

Then('Go for Cashews and click on Add to cart button and proceed', () => {
    cy.get('h4[class="product-name"]').last().should('have.class','product-name')
    cy.get('div[class="product-action"] button').eq(3).as('btn')
    cy.get('@btn').click()

    // cy.get('h4[class="product-name"]').each((el, i) => {
    //     let veggies = el.text()
    //     //  if(veggies == "Cashews - 1 Kg")
    //     if (veggies.replace(' - 1 Kg', ' ').trim() == 'Cashews') {               //to remove 1 kg text
    //         cy.get('div[class="product-action"]> button').eq(i).click()
    //     }
    // })
       // .then(() => {
            cy.get('img[alt="Cart"]').click()
            cy.get('[class="action-block"]> button').first().click()
       // })
})


When('Place order and select country', () => {
    cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('input.chkAgree').click()
    cy.contains(/Proceed/).click()            //cy.get('button')
})

Then('Validate the Thank you message', () => {
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!")
        .should('be.visible')

})









