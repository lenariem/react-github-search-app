/// <reference types="cypress" />

describe("Navigation in the app", () => {
    it("correct navigate between pages", () => {
        cy.visit('http://localhost:3000')

        //About page
        cy.get("a").contains("About").click()
        cy.get("h1").contains("About this app").should("be.visible")
        cy.get("p").contains("Copyright Elena Riemer").should("be.visible")

        //Home page
        cy.get("a").contains("Home").click()
        cy.get("input").should("be.visible")

        cy.intercept(
            "GET",
            'https://api.github.com/search/*', 
            { fixture: 'ghUsers.json' }).as('getSearch')

        cy.get("input")
            .type("reactJS")
            .should("have.value", "reactJS")
        
        cy.get('button').contains(/search/i).click()

        cy.wait('@getSearch')

        cy.get('[href="/profile/reactjs"]').click()

        //single user page
        cy.get("a").contains("Back to home page").click()
        cy.get("input").should("be.visible")

        //logo link test
         cy.get("a").contains("About").click()
         cy.get("[data-cy='logoLink']").click()
         cy.get("input").should("be.visible")
    })
})