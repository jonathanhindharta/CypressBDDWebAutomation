Feature: Sort Product List on Sauce Demo

    Scenario: Sort Sauce Demo Product List By Name A to Z
    Given User is logged in with valid user name and password
        |UserName       | Password      |
        |standard_user  | secret_sauce  |
    When User click filter Name A to Z
        |FilterOption |
        |az           |
    Then The order of the product list would not be change because the default is A to Z ascending