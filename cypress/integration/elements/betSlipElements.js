class BetSlipElements {

    betSlipSelectionName(){
        return cy.get('.selectionname')
    }
    
    betSlipSelection(){
        return cy.get('.bet-slip__selection')
    }

    removeAllSelectionsPopUp(){
        return cy.get('.yesNoPopup')
    }

    removeAllSelectionsPopUpConfirmButton(){
        return cy.get('.yesNoPopup-button.-yes')
    }

}

export default BetSlipElements