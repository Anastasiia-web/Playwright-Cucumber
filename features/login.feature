Feature: Login🌎action
    As a user
    I want to login into application

  Scenario: 
    Given I visit a login page
    When I fill the login form with valid credentials
    Then I should see the home page

  Scenario Outline: Try to login with invalid credentials
    Given I visit a login page
    When I fill the login form with "<username>" and "<password>"
    Then I wait for 3 seconds

    Examples:
        | username| password |
        | Fail-1  | Fail-1  |
        | Fail-2  | Fail-2  |
        | Fail-3  | Fail-3  |


#  npm run test