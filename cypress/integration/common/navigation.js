import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("User is on the pokerstars sports page", () => {
  cy.visit(Cypress.config('baseUrl'))
})