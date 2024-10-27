class CompletePage//function to return xpath of each object in cart page
{
    getPageTitleSpan()
    {
        //span[@data-test='title' and contains(text(), 'Your Cart')]
        return  cy.get('span[data-test="title"]').contains('Checkout: Complete!') 
    }

    getThankYouOrderDiv()
    {
        return  cy.get('h2[data-test="complete-header"]').contains('Thank you for your order!') 
    }

    getCompleteTextDiv()
    {
        return  cy.get('div[data-test="complete-text"]').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!') 
    }d

    getBackHomeButton()
    {
        return cy.get('#back-to-products')
    }
}

export default CompletePage;