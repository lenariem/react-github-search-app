
/// <reference types="cypress" />

describe("Searching function test", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

     it("search by a key word in a technolody with mock", () => {
        cy.intercept(
            "GET",
            'https://api.github.com/search/*', 
            { fixture: 'ghUsers.json' }).as('getSearch')

        cy.get("input")
            .type("reactJS")
            .should("have.value", "reactJS")
        
        cy.get('button').contains(/search/i).click()

        cy.wait('@getSearch')

        cy.contains(/found 12 users/i)

        cy.get('.card')
            .should($card => {
                expect($card).to.contain("reactjs")
            })
     })


     
})


