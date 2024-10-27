class InformationPage//function to return xpath of each object in cart page
{
    getPageTitleSpan()
    {
        //span[@data-test='title' and contains(text(), 'Your Cart')]
        return  cy.get('span[data-test="title"]').contains('Checkout: Your Information') 
    }

    getFirstNameInput()
    {
        return cy.get('#first-name')
    }

    getLastNameInput()
    {
        return cy.get('#last-name')
    }

    getZipPostalCodeInput()
    {
        return cy.get('#postal-code')
    }

    getContinueButton()
    {
        return cy.get('#continue')
    }

    getCancelButton()
    {
        return cy.get('#cancel')
    }

    getFirstNameErrorMessageH3(){
        return  cy.get('h3[data-test="error"]').contains('Error: First Name is required') 
    }

    getMandatoryFieldErrorMessageH3(){
        return  cy.get('h3[data-test="error"]').contains('Error: First Name, Last Name, and Password is required') 
    }
}

export default InformationPage;