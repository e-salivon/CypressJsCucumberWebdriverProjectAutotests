const {When, Given, Then} = require("@badeball/cypress-cucumber-preprocessor");
let stub;
import LoginPage_PO from "./page-objects/LoginPage-PO";
const loginPage = new LoginPage_PO;

Given("I navigate to Login Page", () =>{
 loginPage.navigateToLoginPage();
});

When("I type {string} in the Username fild", (userName) => {
  loginPage.typeUserName(userName);

});

When("I type {string} in the pasword field", (password) => {
  loginPage.typePassword(password)
});

When("I click Login button", () => {
  stub = cy.stub();
  cy.on("window:alert", stub);
  cy.get("#login-button").click();
});

Then("I see {string}", (alertText) => {
  expect(stub).to.have.been.calledWith(alertText);
});
