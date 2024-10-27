Feature: Sort Product List on Sauce Demo

    Scenario: Sort Sauce Demo Product List By Price Low to High
    Given User is logged in with valid user name and password
        |UserName       | Password      |
        |standard_user  | secret_sauce  |
    When User click filter Price low to high
        |FilterOption |
        |lohi         |
    Then The order of the product list will change to be based on the price low to high