Feature: Sort Product List on Sauce Demo

    Scenario: Sort Sauce Demo Product List By Name Z to A
    Given User is logged in with valid user name and password
        |UserName       | Password      |
        |standard_user  | secret_sauce  |
    When User click filter Name Z to A
        |FilterOption |
        |za           |
    Then The order of the product list will change to be based on the name Z to A descending