//navigation
//errors

/// <reference types="cypress" />

describe("Searching function test", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("search by a key word in a technolody", () => {
        cy.get("input")
            .type("reactJS")
            .should("have.value", "reactJS")
        
        cy.get('button').contains(/search/i).click()

        // make sure all found users contain search text 
        cy.get('.card')
            .should($card => {
                expect($card).to.contain(/reactjs/)
            })
    })

    it("search by a key word in a user name", () => {
        cy.get("input")
            .type("alex")
            .should("have.value", "alex")
        
        cy.get('button').contains(/search/i).click()

        cy.get('.card').should('have.length', 30)

        cy.get('.card').should(($card) => {
            // make sure the first contains search text content
            expect($card.first()).to.contain('alex')
        })

        cy.contains(/found 30 users/i)
    })

    it("search a single user", () => {
        cy.get("input")
            .type("lenariem")
            .should("have.value", "lenariem")
        
        cy.get('button').contains(/search/i).click()

        cy.get('.card').contains("lenariem")
            
        cy.contains(/found 1 users/i)
    })
})


