Feature: Check Out Product on Sauce Demo

    Scenario: Check out 1 product from https://www.saucedemo.com/
    Given User is logged in with valid user name and password
        |UserName       | Password      |
        |standard_user  | secret_sauce  |
    And The user click cart icon
    And The user click Check Out Button
    Then The user will sees a confirmation message 'Please Add At Least One Product to The Cart!'