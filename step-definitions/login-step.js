const { Given, When, Then, defineStep } = require('@cucumber/cucumber')

Given('I visit a login page', async function () {        // should match a text from 'login.feature'
    await page.goto('https://www.saucedemo.com/')
})

When('I fill the login form with valid credentials', async function () {     // #user-name
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
})

Then('I should see the home page', async function () {
    await page.waitForSelector('.inventory_item_name')
})

// npm run test