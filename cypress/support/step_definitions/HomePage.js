const { Given } = require("@badeball/cypress-cucumber-preprocessor");
import Base_PO from "./page-objects/base-PO";

const basePage = new Base_PO

Given("I navigate to WebDriverUniversity page", () =>{
    basePage.navigateTo("")
});

Given("I click on {string} button to open new page", (selector) =>{
    cy.clickToOpenPageAtTheSameTab(selector)
});
