class LoginPage {
    async navigateToLoginScreen() {
        await page.goto('https://www.saucedemo.com/')
    }

    async submitLoginForm() {
        await page.fill('#user-name', 'standard_user')
        await page.fill('#password', 'secret_sauce')
        await page.click('#login-button')
    }

    async UserIsLoggedIn() {
        await page.waitForSelector('.inventory_item_name')
    }
}

module.exports = { LoginPage }
