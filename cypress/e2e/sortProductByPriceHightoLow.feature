Feature: Sort Product List on Sauce Demo

    Scenario: Sort Sauce Demo Product List By Price High to Low
    Given User is logged in with valid user name and password
        |UserName       | Password      |
        |standard_user  | secret_sauce  |
    When User click filter Price high to low
        |FilterOption |
        |hilo         |
    Then The order of the product list will change to be based on the price high to low