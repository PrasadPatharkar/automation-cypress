@API
Feature: Pokemon GET /pokemon/{pokemon_name or id}
@smoke @test
Scenario: Fetch Pokemon Data and verify it

Given I want to execute Pokemon Get API for Pokemon "pikachu"
Then Verify response status code as 200
Then Verify response data for Pokemon "pikachu"

@smoke @test @negative
Scenario: Fetch data for an invalid Pokemon and validate it
Given I want to execute Pokemon Get API for Pokemon "doraemon"
Then Verify response status code as 404