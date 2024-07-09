import Base_PO from "./Base_PO";

class LoginPage_PO extends Base_PO {
  navigateToLoginPage() {
    super.navigateTo("/Login-Portal/index.html");
  };

  typeUserName(userName) {
    if (userName) {
      cy.get("#text").type(userName);
    }
  }

  typePassword(password) {
    if (password) {
      cy.get("#password").type(password);
    }
  }
}

export default LoginPage_PO;
