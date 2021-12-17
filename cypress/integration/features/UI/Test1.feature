@UI
Feature: Naviagate to automationteststore.com and shop
    @smoke @test
    Scenario: Navigate to Automation Test Store & Verify Title
        Given I visit the Automation Test Store site
        Then I verify page title as 'A place to practice your automation skills!'
    
    Scenario: Search product and verify search result
        Given I visit the Automation Test Store site
        When I Search for a product 'Perfume'
        Then Verify the first search result to match 'Perfume' keyword
        