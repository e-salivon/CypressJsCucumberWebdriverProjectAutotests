Feature: WebDriverUniversity - Contact Us Page

    Scenario Outline: Validate Contact Us form
        Given I navigate to WebDriverUniversity page
        And I click on "Contact Us" button to open new page
        When I type "<firstName>" in the First Name field
        And I type "<lastName>" in the Last Name field
        And I type "<email>" in the Email field
        And I type "<comment>" in the Comments field
        And I click "SUBMIT" button
        Then I see message "<messageText>"
        Examples:
            | firstName | lastName | email                 | comment                                          | messageText                    |
            | Harry     | Potter   | harryPotter@gmail.com | 123 Allachamora! Positive TC                     | Thank You for your Message!    |
            | Ron       | Weasley  | RonW@gmail            | Can I rent a flying car? Negative TC             | Error: Invalid email address   |
            |           | Riddle   | YouKnowWho@gmail.com  | You mast deliver cookies in Azkaban! Negative TC | Error: all fields are required |
            | Germiona  | Granger  |                       | You will find me in a library. Negative TC       | Error: all fields are required |
            | Sirius    | Black    | SiriusB@phoenix.order |                                                  | Error: all fields are required |
