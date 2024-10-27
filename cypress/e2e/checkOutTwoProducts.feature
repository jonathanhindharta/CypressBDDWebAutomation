Feature: Check Out Product on Sauce Demo

    Scenario: Check out 2 products from https://www.saucedemo.com/
    Given User is logged in with valid user name and password
        |UserName       | Password      |
        |standard_user | secret_sauce  |
    When User adds 2 products to the cart
        |ProductName           |
        |Sauce Labs Backpack   | 
        |Sauce Labs Bike Light | 
    And The user click cart icon
    And The user click Check Out Button
    And The user fills in the required information
        |FirstName  | LastName   |PostalCode|
        |Jonathan   | Hindharta  |10110     |
    And The user clicks the Continue button
    And The user clicks the Finish button
    Then The user will be redirected to the complete page and sees a confirmation message 'Thank you for your order!'