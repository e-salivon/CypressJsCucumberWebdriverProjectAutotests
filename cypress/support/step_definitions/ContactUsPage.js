const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import ContactUs_PO from "./page-objects/ContactUs_PO";

const contactUs = new ContactUs_PO;

When("I type {string} in the First Name field", (firstName) =>{
   contactUs.typeFirstName(firstName)
});

 When("I type {string} in the Last Name field", (lastName) =>{
  contactUs.typeLastName(lastName)
 });

 When("I type {string} in the Email field", (email) =>{
    contactUs.typeEmail(email)
 });

 When("I type {string} in the Comments field", (comment) =>{
    contactUs.typeComment(comment)
 });

 When("I click {string} button", (buttonName) =>{
   cy.clickToButton(buttonName)
 });

 Then("I see message {string}", (message) =>{
   cy.xpath("//h1 | //body").contains(message)

 });

