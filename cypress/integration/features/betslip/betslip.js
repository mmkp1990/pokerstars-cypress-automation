import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import BetSlipElements from '../../elements/betSlipElements';
import Formatters from '../../common/formatters';

const betSlipElements = new BetSlipElements();
const formatters = new Formatters();

Then ("The latest selection is added onto the betslip", () => {
  betSlipElements.betSlipSelectionName().last().invoke("text").then(
    formatters.formatString).as("betSlipSelectionName")
    
  cy.get("@selectionName").then((selectionName) => {
      cy.get("@betSlipSelectionName").then(
        (betSlipSelectionName) => {
          expect(selectionName.trim()).contains(betSlipSelectionName)
      })
   })
})

And ("The number of selections within the betslip is {string}", (number) => {
  betSlipElements.betSlipSelection().should('be.visible').should('have.length', number)
})

Then ("The betslip is empty", () => {
  betSlipElements.betSlipSelection().should('not.exist')
})

And  ("User confirms removal of all selections", () => {
  betSlipElements.removeAllSelectionsPopUp().scrollIntoView()
  betSlipElements.removeAllSelectionsPopUpConfirmButton().click()
})
