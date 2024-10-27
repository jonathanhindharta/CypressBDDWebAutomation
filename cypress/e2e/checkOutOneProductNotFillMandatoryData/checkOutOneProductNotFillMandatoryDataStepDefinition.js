import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../support/pageObjects/HomePage'
import InventoryPage from '../../support/pageObjects/InventoryPage'
import CartPage from '../../support/pageObjects/CartPage'
import InformationPage from '../../support/pageObjects/InformationPage'

const homePage = new HomePage()
const inventoryPage = new InventoryPage()
const cartPage = new CartPage()
const informationPage = new InformationPage()
let productNames=[]

Given("User is logged in with valid user name and password", (dataTable)=>{
    cy.visit(Cypress.env('url_sauce_demo'))
    dataTable.hashes().forEach(element => {
        homePage.getUserNameInput().type(element.UserName)
        homePage.getPasswordInput().type(element.Password)
    });
    homePage.getLoginButtonInput().click()

    //check if element in Inventory Page loaded
    inventoryPage.getBurgerMenuButton().should('be.visible')
    inventoryPage.getShoppingCartContainer().should('be.visible')
    inventoryPage.getProductSortContainer().should('be.visible')
    inventoryPage.getInventoryContainer().should('be.visible')
})

When("User adds a product to the cart", (dataTable)=>{
    productNames=[]
    dataTable.hashes().forEach(element => {
        productNames.push(element.ProductName);
        inventoryPage.getCertainProductAddToCartButton(element.ProductName).should('be.visible')
        inventoryPage.getCertainProductAddToCartButton(element.ProductName).click()
    });
    inventoryPage.getShoppingCartBadge().should('be.visible')
    inventoryPage.getShoppingCartBadge().invoke('text').then((text) => {
        expect(text).to.equal(productNames.length.toString());
    });
})
And("The user click cart icon", ()=>{
    inventoryPage.getShoppingCartContainer().click()

    cartPage.getPageTitleSpan().should('be.visible')
    productNames.forEach((item) => {
        cartPage.getProductNameDiv(item).should('be.visible')
        cartPage.getCertainProductRemoveButton(item).should('be.visible')
    });
    cartPage.getCartCheckOutButton().should('be.visible')
    cartPage.getCartContinueShoppingButton().should('be.visible')
})

And("The user click Check Out Button", ()=>{
    cartPage.getCartCheckOutButton().click()

    informationPage.getPageTitleSpan().should('be.visible')
    informationPage.getFirstNameInput().should('be.visible')
    informationPage.getLastNameInput().should('be.visible')
    informationPage.getZipPostalCodeInput().should('be.visible')
    informationPage.getContinueButton().should('be.visible')
    informationPage.getCancelButton().should('be.visible')
})

And("The user clicks the Continue button", ()=>{
    informationPage.getContinueButton().click()
})

Then("The user will see warning message 'Error: First Name, Last Name, and Password is required'", ()=>{
    informationPage. getMandatoryFieldErrorMessageH3().should('be.visible')
})