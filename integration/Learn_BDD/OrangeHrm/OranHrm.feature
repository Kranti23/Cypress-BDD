Feature: Ecommerce Site: OrangeHRM

    Scenario: Login with Valid Crendetials
        Given Visit orange HRM Site
        And Fill the username
        And Fill the password
        When Click on login button
        Then Validate the Dashbord text


    Scenario: Login with Invalid Crendetials
        Given Visit orange HRM Site
        And Fill the username
        And Fill the wrong password
        When Click on login button
        Then Validate the Error Message