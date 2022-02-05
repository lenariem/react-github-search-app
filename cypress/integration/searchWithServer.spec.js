/// <reference types="cypress" />

describe("Searching function test with server", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("search by a key word in a technolody", () => {
         //from commands
        cy.typeSearchTerm("reactJS")

        // make sure all found users contain search text 
        cy.get('.card')
            .should($card => {
                expect($card).to.contain(/reactjs/)
            })
    })

    it("search by a key word in a user name", () => {
        //from commands
        cy.typeSearchTerm("alex")

        cy.get('.card').should('have.length', 30)

        cy.get('.card').should(($card) => {
            // make sure the first contains search text content
            expect($card.first()).to.contain('alex')
        })

        cy.contains(/found 30 users/i)
    })

    it("search a single user", () => {
         //from commands
        cy.typeSearchTerm("lenariem")

        cy.get('.card').contains("lenariem")
            
        cy.contains(/found 1 users/i)
    })
})


