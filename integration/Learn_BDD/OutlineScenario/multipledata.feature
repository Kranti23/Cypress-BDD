Feature: End to end E-commerce validation

    Scenario Outline: Login for Multiple users
        Given Navigate to Practice Automation Site
        And user enters the registered <username>
        And user enters the created <password>
        When user clicks on login button
        Then Validate Dashboard text


        Examples:
            | username           | password    |
            | chavan99@gmail.com | minskole@23 |
            | nikhil@test.com    | Hofgermany@202056  |
            | nikkhil@test.com      | krac@122023     |






