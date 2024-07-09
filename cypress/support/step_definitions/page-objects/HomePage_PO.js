import Base_PO from "./Base_PO";

class HomePage_PO extends Base_PO {
    navigateToHomePage() {
        super.navigateTo("")
    };
    clickButton(selector){
        cy.clickToOpenPageAtTheSameTab(selector)

    };


}
export default HomePage_PO;