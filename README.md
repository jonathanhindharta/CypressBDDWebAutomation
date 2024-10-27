# Cypress Web BDD Automation
Cypress Example Web BDD Automation By Jonathan Hindharta
-----------------------------------
Required Softwares
- Node.js
- Cypress
- Cypress-cucumber-preprocessor
- Visual studio Code editior

-----------------------------------
- For E2ETestID-001 Test Case : Sort Sauce Demo Product List By Name A to Z, it can be found in file sortProductByNameAtoZ.feature
- For E2ETestID-002 Test Case : Sort Sauce Demo Product List By Name Z to A, it can be found in file sortProductByNameZtoA.feature
- For E2ETestID-003 Test Case : Sort Sauce Demo Product List By Price (low to high), it can be found in file sortProductByPriceLowtoHigh.feature
- For E2ETestID-004 Test Case : Sort Sauce Demo Product List By Price (high to low), it can be found in file sortProductByPriceHightoLow.feature
- For E2ETestID-005 Test Case : Check out 1 product from https://www.saucedemo.com/, it can be found in file checkOutOneProduct.feature
- For E2ETestID-006 Test Case : Check out 2 products from https://www.saucedemo.com/, it can be found in file checkOutTwoProducts.feature
- For E2ETestID-007 Test Case : Check out 3 products from https://www.saucedemo.com/, it can be found in file checkOutThreeProducts.feature
- For E2ETestID-008 Test Case : Check out 0 product from https://www.saucedemo.com/, it can be found in file checkOutZeroProduct.feature (Notes: it will be error when running because the expected condition is not fullfill, where in my opinion it consider as a bug from Sauce Demo Website)
- For E2ETestID-009 Test Case : Check out 1 product from https://www.saucedemo.com/, with only fill Last Name and Zip Code on Information Page, it can be found in file checkOutOneProductOnlyFillLastNameZipCode.feature
- For E2ETestID-010 Test Case : Check out 1 product from https://www.saucedemo.com/, but not fill madantory data on Information Page, it can be found in file checkOutOneProductNotFillMandatoryData.feature (Notes: it will be error when running because the expected condition is not fullfill, where in my opinion it consider as a bug from Sauce Demo Website)
- For E2ETestID-011 Test Case : Check out 1 product from https://www.saucedemo.com/, with only fill First Name and Zip Code on Information Page, it can be found in file checkOutOneProductOnlyFillFirstNameZipCode.feature

-----------------------------------
To Run Automation file can be done by this steps :
1. Run command "npm install" to generate node_modules for the first time
2. To Run All test case in Cypress, type "npx cypress open" in visual studio code terminal and press enter, after cypress opened, click E2E Testing, choose one of the browser that we desire and click, after that choose and click one of the test specs that we want to run.
3. To Run Specific Test in Specific Browser like Chrome, use this command:
Example For run checkOutOneProduct.feature :
npx cypress run --headed --browser chrome --spec cypress/e2e/checkOutOneProduct.feature
Example For run sortProductByNameZtoA.feature :
npx cypress run --headed --browser chrome --spec cypress/e2e/sortProductByNameZtoA.feature
