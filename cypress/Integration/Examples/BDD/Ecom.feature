Feature: End to End Ecom Validation

    Feature Description

    Scenario: Ecom products delivery
    Given I open webpage
    When I add items to the cart 
    And Validate the price
    Then select the country and verify success msg



    Scenario: Filling form 
     Given I open webpage
     When I fill the form details
     Then I Validate form behavior
     And Click shop icon

