const {
  When,
  Given,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
let stub;

Given("I click on LOGIN PORTAL button", () => {
  cy.contains("LOGIN PORTAL").invoke("removeAttr", "target").click();
});

When("I type {string} in the Username fild", (userName) => {
  if (userName) {
    cy.get("#text").type(userName);
  }
});

When("I type {string} in the pasword field", (password) => {
  if (password) {
    cy.get("#password").type(password);
  }
});

When("I click Login button", () => {
  stub = cy.stub();
  cy.on("window:alert", stub);
  cy.get("#login-button").click();
});

Then("I see {string}", (alertText) => {
  expect(stub).to.have.been.calledWith(alertText);
});
