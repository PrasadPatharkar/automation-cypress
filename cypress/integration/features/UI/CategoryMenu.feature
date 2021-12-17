Feature: Verify Category flow

Scenario: Validate all the category in the store header

Given User open automationteststore
When User hover on Category                    	//'Category comes' from data table
Then User validate Sub category              	//'Sub category' comes from data table



Scenario: Validate Products count in for each Category

Given User open automationteststore
When User click on Category                    	//'Category' comes from data table 
Then Validate User is on Category page         	//'Category' comes from data table
And Validate product count    					// expected count will be deferent for all the Category so that will comes from data table