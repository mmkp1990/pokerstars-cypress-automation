class OddsSelectionElements {

    oddsButton() {
        return cy.get('.button__bet')
    }
 
     selectionName() {
         return cy.get('.marketsList__market__title')
     }
}

export default OddsSelectionElements
