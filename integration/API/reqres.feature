Feature: Reqres API

    Scenario: GET User Via API
        Given User send the request to get multiple users list
        Then Users should be display


    Scenario Outline: Create User Via API

        Given User send the POST request to create the user with body <name> and <job>
        Then User should be created with response of <name> and <job>

        Examples:
            | name   | job        |
            | Kranti | Tester     |
            | Nikhil | Automotive |
            | Kunal  | Developer  |
            | Akash  | QA         |

