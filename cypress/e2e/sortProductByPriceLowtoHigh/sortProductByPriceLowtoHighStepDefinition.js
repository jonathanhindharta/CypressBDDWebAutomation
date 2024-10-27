import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../support/pageObjects/HomePage'
import InventoryPage from '../../support/pageObjects/InventoryPage'

const homePage = new HomePage()
const inventoryPage = new InventoryPage()
const optionValueDefault=['az','za','lohi','hilo']
let productPrice=[]

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

When("User click filter Price low to high", (dataTable)=>{
   inventoryPage.getProductSortContainer() 
    .find('option')
    .then(($options) => {
        const values = $options.map((index, option) => option.value).get(); 

        optionValueDefault.forEach((optionValue) => {
        expect(values).to.include(optionValue); 
        });
    });
    dataTable.hashes().forEach(element => {
        inventoryPage.getProductSortContainer().select(element.FilterOption)
        inventoryPage.getProductSortContainer().should('have.value', element.FilterOption)
    });
    
})

Then("The order of the product list will change to be based on the price low to high", ()=>{
    inventoryPage.getProductPriceList().each(($el, index, $list) => {
        const productPricetext=$el.text()
        productPrice[index]=parseFloat(productPricetext.replace('$',''))
    }).then (function(){//use promise because javascript running asynchronous
        const sortedProductPrice = productPrice.sort(function(a, b){return a - b});
        expect(productPrice).to.deep.equal(sortedProductPrice);
    })
})
