Feature: Verify purchase product flow

Scenario: Validate product purchase checkout flow

Given User open automationteststore
When User click on "Login or register" link
And User login with valid "username" and "password"
Then Validate "Welcome back username" on user logged in homepage  // username is dynamic field it should be based on logged in user
When User click on <Category name>   // category is dynamic
And User click on product
Then User valid Product name on product details page
When User select product quantity
And Click on 'Add to Cart' button
Then Validate User is on checkout cart page
And Validate added product name,qaunity and total amount
When User Click on Checkout button
Then Validate User is on checkout confirmation page
And Validate added product name,qaunity and total amount
When User Click on Confirm Order button
Then Validate User is on order success page
And Validate Sucess message "YOUR ORDER HAS BEEN PROCESSED!" and "Your order #827 has been created!"

