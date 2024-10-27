import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../support/pageObjects/HomePage'
import InventoryPage from '../../support/pageObjects/InventoryPage'
import CartPage from '../../support/pageObjects/CartPage'

const homePage = new HomePage()
const inventoryPage = new InventoryPage()
const cartPage = new CartPage()

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
And("The user click cart icon", ()=>{
    inventoryPage.getShoppingCartContainer().click()

    cartPage.getPageTitleSpan().should('be.visible')
    cartPage.getCartCheckOutButton().should('be.visible')
    cartPage.getCartContinueShoppingButton().should('be.visible')
})

And("The user click Check Out Button", ()=>{
    cartPage.getCartCheckOutButton().click()
})

Then("The user will sees a confirmation message 'Please Add At Least One Product to The Cart!'", ()=>{
    cartPage.getNoProductErrorMessage().should('be.visible')
})
