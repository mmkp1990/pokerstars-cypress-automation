Feature: Add/Remove Betslip

Background:
    Given User is on the pokerstars sports page
    When User selects an available bet bundle selection
    And User clicks on the '.betslipToggle' element
    Then The latest selection is added onto the betslip
    And The number of selections within the betslip is "1"


Scenario: User removes selection from betslip by clicking on the already selected odds button
    When User clicks on the '.button__bet.selected' element
    Then The betslip is empty


Scenario: User removes selection from betslip by clicking on the selection's bin icon
    When User clicks on the '.remove' element
    Then The betslip is empty


 Scenario: User adds additional selection onto betslip and then remove all selections in a single attempt
    When User selects an available bet bundle selection
    Then The latest selection is added onto the betslip
    And The number of selections within the betslip is "2"
    When User clicks on the '.remove-all' element
    And  User confirms removal of all selections
    Then The betslip is empty