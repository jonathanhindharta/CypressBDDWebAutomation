class InventoryPage//function to return xpath of each object in inventory page
{
    getBurgerMenuButton()
    {
        return cy.get('#react-burger-menu-btn')//get using id
    }

    getShoppingCartContainer()
    {
        return cy.get('#shopping_cart_container')
    }

    getProductSortContainer()
    {
        return cy.get('select[data-test="product-sort-container"]')//get other properties in xpath
    }

    getInventoryContainer()
    {
        return cy.get('#inventory_container')
    }

    getCertainProductAddToCartButton(productName){
        //for xpath like //div[@data-test='inventory-item-name' and contains(text(), 'Sauce Labs Backpack')]/ancestor::div[@class="inventory_item_label"]/following-sibling::div/button
        return  cy.get('div[data-test="inventory-item-name"]')
        .contains(productName) 
        .closest('div.inventory_item_label') 
        .next('div')
        .find('button')
    }

    getShoppingCartBadge()
    {
        return cy.get('span[data-test="shopping-cart-badge"]')//get other properties in xpath
    }

    getOptionSortNameAtoZ(){
        //option[contains(.,'Name (A to Z)')]
        return  cy.get('option').contains('Name (A to Z)') 
    }

    getOptionSortNameZtoA(){
        //option[contains(.,'Name (Z to A)')]
        return  cy.get('option').contains('Name (Z to A)') 
    }

    getOptionSortPriceLowHigh(){
        //option[contains(.,'Price (low to high)')]
        return  cy.get('option').contains('Price (low to high)') 
    }

    getOptionSortPriceHighLow(){
        //option[contains(.,'Price (low to high)')]
        return  cy.get('option').contains('Price (high to low)') 
    }

    getProductNameList(){
        return  cy.get('div[data-test="inventory-item-name"]')
    }

    getProductPriceList(){
        return  cy.get('div[data-test="inventory-item-price"]')
    }
}

export default InventoryPage;