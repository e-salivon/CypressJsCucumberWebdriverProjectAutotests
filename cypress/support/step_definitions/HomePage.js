const { Given } = require("@badeball/cypress-cucumber-preprocessor");
import Base_PO from "./page-objects/Base_PO";
import HomePage_PO from "./page-objects/HomePage_PO";

const basePage = new Base_PO;
const homePage = new HomePage_PO;

Given("I navigate to WebDriverUniversity page", () =>{
    basePage.navigateTo("")
});

Given("I click on {string} button to open new page", (selector) =>{
    // cy.clickToOpenPageAtTheSameTab(selector)
    homePage.clickButton(selector)

});
