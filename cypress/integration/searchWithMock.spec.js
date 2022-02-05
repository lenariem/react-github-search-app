/// <reference types="cypress" />

describe("Searching function test with mock", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

     it("search by a key word in a technolody with mock", () => {
        cy.intercept(
            "GET",
            'https://api.github.com/search/*', 
            { fixture: 'ghUsers.json' }).as('getSearch')

        //from commands
        cy.typeSearchTerm("reactJS")

        cy.wait('@getSearch')

        cy.contains(/found 12 users/i)

        cy.get('.card')
            .should($card => {
                expect($card).to.contain("reactjs")
            })
     })


     it("search a single user with mock", () => {
        cy.intercept(
            "GET",
            'https://api.github.com/search/*', 
            { fixture: 'oneUser.json' }).as('getUser')

        //from commands
        cy.typeSearchTerm("lenariem")

        cy.wait('@getUser')

        cy.get('.card').contains("lenariem")
            
        cy.contains(/found 1 users/i)
    })
})


