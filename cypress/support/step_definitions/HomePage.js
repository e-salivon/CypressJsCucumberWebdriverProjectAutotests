const { Given } = require("@badeball/cypress-cucumber-preprocessor");


Given("I navigate to WebDriverUniversity page", () =>{
    cy.visit('https://www.webdriveruniversity.com/')
});

Given("I click on Contact Us button", () =>{
    cy.clickToOpenPageAtTheSameTab("CONTACT US")
});

Given("I click on LOGIN PORTAL button", () => {
    cy.clickToOpenPageAtTheSameTab("LOGIN PORTAL")
  });