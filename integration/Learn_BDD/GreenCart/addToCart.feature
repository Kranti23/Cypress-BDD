Feature: End to End E-Commerce Validation

    Scenario: Add deliverable ecommerce product to the cart
    Given open the E-commerce site
    And Type for the product name which starts from 'ca' in the search box
    Then Go for Cashews and click on Add to cart button and proceed
    When Place order and select country 
    Then Validate the Thank you message










        