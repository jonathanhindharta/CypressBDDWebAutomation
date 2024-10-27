class OverViewPage//function to return xpath of each object in cart page
{
    getPageTitleSpan()
    {
        //span[@data-test='title' and contains(text(), 'Your Cart')]
        return  cy.get('span[data-test="title"]').contains('Checkout: Overview') 
    }

    getProductNameDiv(productName){
        return  cy.get('div[data-test="inventory-item-name"]').contains(productName) 
    }

    getPaymentInfoDiv()
    {
        return  cy.get('div[data-test="payment-info-label"]').contains('Payment Information:') 
    }

    getShippingInfoDiv()
    {
        return  cy.get('div[data-test="shipping-info-label"]').contains('Shipping Information:') 
    }

    getPriceTotalDiv()
    {
        return  cy.get('div[data-test="total-info-label"]').contains('Price Total') 
    }
    
    getFinishButton()
    {
        return cy.get('#finish')
    }

    getCancelButton()
    {
        return cy.get('#cancel')
    }
}

export default OverViewPage;