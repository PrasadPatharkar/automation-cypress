Feature: Verify user login flow

    Scenario: Validate valid user login flow

        Given I visit the Automation Test Store site
        When User click on "Login or register" link
        And User enter valid username and password
            | username | password |
            | auto001  | test123  |
        Then Validate message "Welcome back Autofirst" for "Successful" logged in

    Scenario: Validate invalid user login flow

        Given I visit the Automation Test Store site
        When User click on "Login or register" link
        And User enter valid username and password
            | username | password |
            | auto001  | tesT123  |
        Then Validate message "Error: Incorrect login or password provided." for "Unsuccessful" logged in