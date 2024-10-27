class HomePage//function to return xpath of each object in login page
{
    getUserNameInput()
    {
        return cy.get('#user-name')
    }

    getPasswordInput()
    {
        return cy.get('#password')
    }

    getLoginButtonInput()
    {
        return cy.get('#login-button')
    }

}

export default HomePage;