const { Given } = require("@badeball/cypress-cucumber-preprocessor");


Given("I navigate to WebDriverUniversity page", () =>{
    cy.visit('https://www.webdriveruniversity.com/')
});

Given("I click on {string} button to open new page", (selector) =>{
    cy.clickToOpenPageAtTheSameTab(selector)
});
