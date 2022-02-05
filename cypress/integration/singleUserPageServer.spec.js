/// <reference types="cypress" />

describe("Single user page with server", () => {
     it("correct rendering a single user page", () => {
        cy.visit('http://localhost:3000')
         //from commands
        cy.typeSearchTerm("lenariem")
        cy.get('[href="/profile/lenariem"]').click()

        cy.get("img").should('have.class', 'rounded')
        cy.get("h4").contains("About User")
        cy.get(".badge").should('have.length', 4)
        cy.get('a[href*="https://github.com/lenariem"]').should('be.visible')
        cy.get('a[href*="https://www.linkedin.com/in/elenariemer/"]').should('be.visible')
        cy.get(".card.mb-3").should('have.length', 5)
    })
})