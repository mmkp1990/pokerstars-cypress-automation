import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And ("User clicks on the {string} element", (element) => {
      cy.get(element).click()
})
