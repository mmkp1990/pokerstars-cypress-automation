import { When, Then } from "cypress-cucumber-preprocessor/steps";
import OddsSelectionElements from "../../elements/oddsSelectionElements";
import PriceFormatElements from "../../elements/priceFormatElements";
import * as oddslib from "oddslib";

 const oddsSelectionElements = new OddsSelectionElements();
 const priceFormatElements = new PriceFormatElements();

When ("User selects the price format dropdown option of {string}", (text) => {
    priceFormatElements.priceFormatDropdown().select(text, { force: true })
})

Then ("The prices are formatted in fractions by default", () => {
    priceFormatElements.priceFormatDropdown().should('have.value', 'Fraction')
    const oddsValue = oddsSelectionElements.oddsButton().first().invoke("text")

    oddsValue.then((oddsValue) => {
        expect(oddsValue.trim()).contains("/")
        oddsValue.trim()
    }).as("storedOddsValue")
})

Then ("The prices are formatted in {string}", (priceFormat) => {

     cy.get("@storedOddsValue").then(aliasValue => {

        let expectedOddsValue;
        let currentOddsValue = oddsSelectionElements.oddsButton().first().invoke("text");
        let storedOddsValue = oddslib.from("fractional", aliasValue);

        switch (priceFormat) {
            case "Fractional":
                expectedOddsValue = storedOddsValue.to("fractional")
              break;
            case "Decimal":
                expectedOddsValue = storedOddsValue.to("decimal").toFixed(2)
              break;
            case "American":
                expectedOddsValue = "+" + storedOddsValue.to("moneyline"); 
              break;
            default:
                throw new Error('unknown price format: ' + priceFormat)
          }

          currentOddsValue.then((oddsValue) => {
            expect(oddsValue.trim()).equals(expectedOddsValue)

          })
    })
})