Feature: Verify prices can be changed to different formats

Background:
    Given User is on the pokerstars sports page
    Then The prices are formatted in fractions by default

  Scenario Outline: Verify price format is updated when toggling price format options
    When User selects the price format dropdown option of '<priceFormat>'
    Then The prices are formatted in '<priceFormat>'
    Examples:
      | priceFormat | 
      | Decimal     |
      | American    |
      | Fractional  |