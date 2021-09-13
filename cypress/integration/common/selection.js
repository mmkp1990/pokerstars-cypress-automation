import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import OddsSelectionElements from '../elements/oddsSelectionElements';
import Formatters from '../common/formatters';

const oddsSelectionElements = new OddsSelectionElements();
const formatters = new Formatters();

When ("User selects an available bet bundle selection", () => {
  oddsSelectionElements.oddsButton().each((element, index) => {

    if (!element.attr("disabled") && !element.hasClass("selected")) { 
      oddsSelectionElements.selectionName().eq(index).invoke("text").then(
        formatters.formatString).as("selectionName")

      cy.wrap(element).click()
      return false;
    }
  })
   oddsSelectionElements.oddsButton().not("have.class", "selectionAdded") 
})
