
@smoke
Feature: Login form validation
    Scenario Outline: Login form positive and negative scenario
        Given I navigate to WebDriverUniversity page
        And I click on LOGIN PORTAL button
        When I type "<username>" in the Username fild
        And I type "<password>" in the pasword field
        And I click Login button
        Then I see "<message>"
        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | blackhat  | webdriver123 | validation failed    |
            |           | webdriver123 | validation failed    |
            | blackhat  |              | validation failed    |

