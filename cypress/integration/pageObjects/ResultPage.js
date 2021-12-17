const BasePage = require("../core/BasePage");

//var elements = require("./elements");
class ResultPage extends BasePage{
    constructor(){
        return super()
    }

    //Web Elements
    SEARCH_RESULT= ".list-inline>div .prdocutname"

    //Page Object Methods
    verifyFirstSearchResult(searchText){
        return cy.get(this.SEARCH_RESULT).first().should('include.text', searchText);
    }
}
module.exports = ResultPage;
//export default ResultPage;