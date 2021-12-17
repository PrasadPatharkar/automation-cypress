Feature: Verify all Scenarios for User Registration flow and User Login flow

    Scenario Outline: Validate user registration flow

        Given I visit the Automation Test Store site
        When User click on "Login or register" link
        Then Validate "Account Login" page header on login page
        And Validate by default "Register Account" checkbox is selected
        When User click on "Continue" link
        Then Validate "Create Account" page header on account page
        When User click on "Continue" link
        Then Validate all required field validation message
            | fieldName | validationMsg                                                         |
            | firstName | First Name must be between 1 and 32 characters!                       |
            | lastName  | Last Name must be between 1 and 32 characters!                        |
            | email     | Email Address does not appear to be valid!                            |
            | address   | Address 1 must be between 3 and 128 characters!                       |
            | city      | City must be between 3 and 128 characters!                            |
            | region    | Please select a region / state!                                       |
            | zipCode   | Zip/postal code must be between 3 and 10 characters!                  |
            | loginName | Login name must be alphanumeric only and between 5 and 64 characters! |
            | password  | Password must be between 4 and 20 characters!                         |
        And Validate "Error: You must agree to the Privacy Policy!" validation message for user no accept Privacy Policy
        When User fill the form for required field
            | firstName   | lastName   | email   | address   | country   | region   | city   | zipCode   | loginName   | password   |
            | <firstName> | <lastName> | <email> | <address> | <country> | <region> | <city> | <zipCode> | <loginName> | <password> |
        And User check the Privacy Policy checkbox
        And User click on "Continue" link
        Then Validate "Your Account Has Been Created!" page header on account_success page
        And Validate Sucess message "Congratulations! Your new account has been successfully created!"
        Examples:
            | firstName     | lastName     | address                                                                      | country       | region        | city      | zipCode | loginName | password |
            | AutoFirstName | AutoLastName | Plot No 30, Yashodhan Nagar, Sai Kripa Chs, Veer Savarkar Marg, Thane (west) | India         | Maharashtra   | Mumbai    | 400606  | autouser  | Test@123 |
            | AutoFirstName | AutoLastName | 1 St Floor, Manish Shopping Centre, J P Road, Andheri (west)                 | India         | Maharashtra   | Mumbai    | 400053  | autouser  | Test@123 |
            | AutoFirstName | AutoLastName | 608-609, Shivaji Road Aruna Lane, Azad Market                                | India         | Delhi         | Delhi     | 110006  | autouser  | Test@123 |
            | AutoFirstName | AutoLastName | Shop No 2,no 67, Karthik Plaza, S P Road, S P Road                           | India         | Karnataka     | Bangalore | 560002  | autouser  | Test@123 |
            | AutoFirstName | AutoLastName | 2318 Farland Street                                                          | United States | Massachusetts | Bolton    | 01740   | autouser  | Test@123 |

