

class Base_PO {
    navigateTo(path){
        cy.fixture("config.json").then((data) =>{
            cy.visit(data.baseURL + path)
        })
    }

}
export default Base_PO