const { Given, When, Then, defineStep } = require('@cucumber/cucumber')

Given('I visit a login page', async function () {        // should match a text from 'login.feature'
    await page.goto('https://www.saucedemo.com/')
})

