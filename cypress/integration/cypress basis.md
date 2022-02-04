/// <reference types="cypress" />

describe("Locators", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it("locating elements with get command", () => {
        //get by tag name
        cy.get('input');
        
        //get by attbute
        cy.get('[title="Restart your Search"]');
        cy.get('[href="/about"]');
        // Get elements with specific data test id for element data=cy ="logoLink"
        cy.get("[data-cy='logoLink']")
        
        //get by id or class name
        //cy.get("#logoLink");
        //get by type [submit]
        //get by tag AND class cy.get(button.Elements-btn)
        //get by tag AND class AND ID cy.get(button.Elements-btn#btn-search)
        // Get all elements by tag name AND class and type attribute
        //cy.get("button.Elements-btn[type='submit']")
       
    });

    it("locating elements with contains command", () => {
        //cy.get('.nav').contains('About') // Yield el in .nav containing 'About'
        //cy.contains('Hello') // Yield first el in document containing 'Hello'
        //content (String, Number, RegExp)
        //contains return only one element, only first match, if want more, need specify selector, like this
        //cy.get('button').contains(/search/i);
        //or
        //cy.contains('[type="submit"]', "not unique Text")
        //cy.contains("form", "Not unique text")

        cy.contains("Home");
        cy.get('button').contains(/search/i);
        cy.contains("No users found");
    });

    it("locating with find", () => {
        //cy.get('.article').find('footer') // Yield 'footer' within '.article'
        cy.get("nav").find(".nav-item");
    })

});

 //with command from support- commands
 //in commands.js file
 //can be set of multiple commands
//Cypress.Commands.add("getByTestId", (testId) => {
 //   cy.get(`[data-cy='${testId}']`)
//})

//to use
// cy.getByTestId("logoLink");

// to install cypres  https://docs.cypress.io/guides/getting-started/installing-cypress
//npm install cypress --save-dev

//in cypres folder add config:
/* cypres.json in root folder
{
    "baseUrl": "http://localhost:3000",
    "ignoreTestFiles": [
        "**/1-getting-started/*.js",
        "**/2-advanced-examples/*.js"
    ],
    "viewportHeight": 1080,
    "viewportWidth": 1920
}
 */

 //in cypres folder 
 /* tsconfig.json
 "compilerOptions": {
    "types": ["cypress"]
}
  */

  //npx cypress open

  //adding tests in folder integration

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
        const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
        const url = `https://api.github.com/search/users?q=reactJS&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        console.log(url)
        
        cy.intercept("GET", url,{
             fixture: "ghUsers.json"
        })