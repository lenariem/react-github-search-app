// <reference types="cypress" />

describe("Single user page with mock", () => {
     it("correct rendering a single user page", () => {
        cy.intercept(
            "GET",
            'https://api.github.com/search/*', 
            { fixture: 'oneUser.json' }).as('getUser')

        cy.intercept(
            "GET",
            'https://api.github.com/users/lenariem/*', 
            { fixture: 'userRepos.json' }).as('getRepos')
        
        cy.visit('http://localhost:3000')
        cy.get("input").type("lenariem")
        cy.get('button').contains(/search/i).click()
        cy.wait('@getUser')

        cy.get('[href="/profile/lenariem"]').click()
        cy.wait('@getRepos')
        
        cy.get("img").should('have.class', 'rounded')
        cy.get("h4").contains("About User")
        cy.get(".badge").should('have.length', 4)
        cy.get('a[href*="https://github.com/lenariem"]').should('be.visible')
        cy.get('a[href*="https://www.linkedin.com/in/elenariemer/"]').should('be.visible')
        cy.get(".card.mb-3").should('have.length', 5)
    })
})