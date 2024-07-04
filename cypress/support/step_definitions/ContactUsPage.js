const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I type {string} in the First Name field", (firstName) =>{
   if (firstName) {
      cy.get('[name="first_name"]').type(firstName);
  }
});

 When("I type {string} in the Last Name field", (lastName) =>{
    cy.get('[name="last_name"]').type(lastName)
 });

 When("I type {string} in the Email field", (email) =>{
    cy.get('[name="email"]').type(email)
 });

 When("I type {string} in the Comments field", (comment) =>{
    cy.get('textarea.feedback-input').type(comment)
 });

 When("I click Submit button", () =>{
    cy.get('[type="submit"]').click()
 });

 Then("I see message {string}", (message) =>{
   cy.xpath("//h1 | //body").contains(message)

 });

