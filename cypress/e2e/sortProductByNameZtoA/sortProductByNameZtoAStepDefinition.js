import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../support/pageObjects/HomePage'
import InventoryPage from '../../support/pageObjects/InventoryPage'

const homePage = new HomePage()
const inventoryPage = new InventoryPage()
const optionValueDefault=['az','za','lohi','hilo']
let productName=[]

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

When("User click filter Name Z to A", (dataTable)=>{
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

Then("The order of the product list will change to be based on the name Z to A descending", ()=>{
    inventoryPage.getProductNameList().each(($el, index, $list) => {
        const productNametext=$el.text()
        productName[index]=productNametext
    }).then (function(){//use promise because javascript running asynchronous
        const sortedProductName = productName.reverse();
        expect(productName).to.deep.equal(sortedProductName);
    })
})
