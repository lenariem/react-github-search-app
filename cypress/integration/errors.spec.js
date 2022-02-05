/// <reference types="cypress" />

describe("Errors boundry works correct", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("404 page", () => {
        cy.visit('/badrequest')
        cy.get("h1").contains("Page not found").should("be.visible")
        cy.get('[alt="cat"]').should("be.visible")
        cy.get("a")
            .contains("Back to home page")
            .should("be.visible")
            .should('have.attr', 'href')
            .and('include', '/')
            .then((href) => {
                cy.visit(href)
            })

        cy.get("input").should("be.visible")
    })


    it("search without enter a search term", () => {
        cy.get("input").clear()
        cy.get('button').contains(/search/i).click()
        
        cy.get('div')
        .contains("Enter a username to search please!")
        .should("be.visible")

        cy.get(".close").click()

        cy.get('div')
        .contains("Enter a username to search please!")
        .should("not.exist")
    })

    it("enter a search term longer than 80 characters", () => {
        cy.get("input").clear()
        cy.get("input").type("augusRtfQEhcYucMXDLrjbfPyvKoxjZgimbaKOVHXXowYtQQxPppRJpOViNgJdIkTrRMfnnOlKtfzKgvuJjVJdaAxvknRRpBvbNeoPDsriclDDaCIxOlnFBopocLwOqhcZSUVeeJPxBEjbgUXww")
        cy.get('button').contains(/search/i).click()
        
        cy.get('p')
        .contains("No users found")
        .should("be.visible")

        cy.get("input")
            .invoke('val')                   
            .should("have.length", 80)
    })
})

