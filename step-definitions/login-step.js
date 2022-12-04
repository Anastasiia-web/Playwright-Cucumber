const { Given, When, Then } = require('@cucumber/cucumber')            // { defineStep } is depricated, earlier all three can be changed to only one: { defineStep } function

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

Then('I wait for 3 seconds', async function () {
    loginPage.pause
})

When(
    /^I fill the login form with "([^"]*)" and "([^"]*)"$/, async function (username, password) {
        // irregular expressions usage - will be substituted with 'Examples' values from the scenario in 'login.feature' file
        loginPage.submitLoginWithParameters(username, password)
    })



// npm run test                     > 'test' - name of the script in 'package.json' file
// npm run report                   > 'report' - name of the script in 'package.json' file