Given("I want to execute Pokemon Get API for Pokemon {string}", (pokename)=>{
    cy.request({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/' + pokename,
        headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false
    }).as('get_pokemon_data')
});

Then("Verify response status code as {int}", (statusCode)=>{
    cy.get('@get_pokemon_data').should((response)=>{
        expect(response.status).to.eq(statusCode);
    })
});

Then("Verify response data for Pokemon {string}", (pokename)=>{
    cy.get('@get_pokemon_data').should((response)=>{
        expect(response.body.forms[0]).to.have.property('name', pokename);
    })
});