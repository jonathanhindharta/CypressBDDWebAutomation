Feature: Check Out Product on Sauce Demo

    Scenario: Check out 1 product from https://www.saucedemo.com/, but not fill madantory data on Information Page
    Given User is logged in with valid user name and password
        |UserName       | Password      |
        |standard_user  | secret_sauce  |
    When User adds a product to the cart
        |ProductName  |
        |Sauce Labs Backpack | 
    And The user click cart icon
    And The user click Check Out Button
    And The user clicks the Continue button
    Then The user will see warning message 'Error: First Name, Last Name, and Password is required'