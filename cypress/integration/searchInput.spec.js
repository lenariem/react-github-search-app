/// <reference types="cypress" />

describe("Search input", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("check search is empty by default", () => {
        cy.get('input')
            .should("be.visible")
            .should("have.attr", "placeholder", "Enter a username to search on Github...")
            .and("have.value", "")
    })

    it("check search is case insensetive", () => {
        cy.get("input")
            .type("leNarIeM")
            .should("have.value", "leNarIeM")
        
        cy.get('button').contains(/search/i).click()

        cy.get('.card').contains("lenariem")
            
        cy.contains(/found 1 users/i)
    })

    it("check restart search", () => {
        cy.get('input').type("javaScript")
        
        cy.get('button').contains(/search/i).click()
       
        cy.get('.card').should(($card) => {
            // should have found 30 users
            expect($card).to.have.length(30)
        })

        cy.get('[title="Restart your Search"]').click()

        cy.get('.card').should('not.exist')
        cy.contains(/no users found/i)
    })
})


