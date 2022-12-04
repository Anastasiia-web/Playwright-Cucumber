const { Given, When, Then } = require('@cucumber/cucumber')            // all three can be changed to only one: { defineStep } function

const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given('I visit a login page', async function () {                            // should match a text from 'login.feature'
    loginPage.submitLoginForm
})

When('I fill the login form with valid credentials', async function () {     // #user-name
    loginPage.submitLoginForm
})

Then('I should see the home page', async function () {
    loginPage.UserIsLoggedIn
})

// npm run test                     > 'test' - name of the script in 'package.json' file
// npm run report                   > 'report' - name of the script in 'package.json' file