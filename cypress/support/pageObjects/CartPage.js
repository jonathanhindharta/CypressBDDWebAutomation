class CartPage//function to return xpath of each object in cart page
{
    getPageTitleSpan()
    {
        //span[@data-test='title' and contains(text(), 'Your Cart')]
        return  cy.get('span[data-test="title"]').contains('Your Cart') 
    }

    getProductNameDiv(productName){
        return  cy.get('div[data-test="inventory-item-name"]').contains(productName) 
    }

    getCertainProductRemoveButton(productName){
        return  cy.get('div[data-test="inventory-item-name"]')
        .contains(productName) 
        .closest('a') 
        .next('div')
        .next('div')
        .find('button').contains('Remove') 
    }

    getCartCheckOutButton()
    {
        return cy.get('#checkout')
    }

    getCartContinueShoppingButton()
    {
        return cy.get('#continue-shopping')
    }

    getNoProductErrorMessage(){
        return  cy.get('h3[data-test="error"]').contains('Please Add At Least One Product to The Cart!') 
    }
}

export default CartPage;