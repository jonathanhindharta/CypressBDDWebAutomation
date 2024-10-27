Feature: Check Out Product on Sauce Demo

    Scenario: Check out 1 product from https://www.saucedemo.com/, with only fill Last Name and Zip Code on Information Page
    Given User is logged in with valid user name and password
        |UserName       | Password      |
        |standard_user  | secret_sauce  |
    When User adds a product to the cart
        |ProductName  |
        |Sauce Labs Backpack | 
    And The user click cart icon
    And The user click Check Out Button
    And The user fills in Last Name and  ZIP Code only
        |LastName   |PostalCode|
        |Hindharta  |10110     |
    And The user clicks the Continue button
    Then Then the user will see warning message 'Error: First Name is required'