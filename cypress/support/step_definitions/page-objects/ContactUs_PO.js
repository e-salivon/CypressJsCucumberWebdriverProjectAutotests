import Base_PO from "./Base_PO";

class ContactUs_PO extends Base_PO{
    navigateToContactUsPage(){
        super.navigateTo("/Contact-Us/contactus.html")
    };

    typeLastName(lastName){
        if (lastName) {
            cy.get('[name="last_name"]').type(lastName);
    }};

    typeFirstName(firstName){
        if (firstName) {
            cy.get('[name="first_name"]').type(firstName);
        }
    };

    typeEmail(email){
        if (email) {
            cy.get('[name="email"]').type(email);
        }
    };

    typeComment(comment){
        if (comment) {
            cy.get('textarea.feedback-input').type(comment);
        }
    };


};

export default ContactUs_PO;