const BasePage = require("../core/BasePage");
const { should } = require("chai");

//var elements = require("./elements");
class MakeUpPurchacePage extends BasePage {

  constructor() {
    return super()
  }

  //Web Elements
 WELCOME_MESSAGE="#customer_menu_top > li > a > div";
  MAKEUP_CATEGORY="#categorymenu > nav > ul >li.current > a";
  SUBCATEGORY_LIST="#categorymenu  nav  ul li.current  div  ul:nth-child(1)  li";
  FACE_PRODUCT="a[title='Product with stock locations']";
  QUANTITY_INPUT="#product_quantity";
  PRICE_LABEL="#product  label";
  ADD_TO_CART_LINK="#product a[class='cart']";
  FACE_PAGE_HEADER="#maincontainer  h1 ";
  CHECKOUTPAGE_HEADER="#maincontainer > div > div > div > h1 span";
  PRODUCT_DETAILS="#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(2) > td";
  CHECKOUT_BUTTON="#cart_checkout1";
  CONFIRMATION_HEADER="#maincontainer  h1 > span.maintext";
  CONFIRM_ORDER_BUTTON="#checkout_btn";
  ORDER_PROCESSED_MESSAGE="#maincontainer h1  span.maintext"
  
  /**function to select subcategory
   * * @param {String} subcategory 
   * */
selectCategory(subCategory)
{
    cy.get(this.SUBCATEGORY_LIST).each(($el, index, $list) => {
       
        if ($el.actualText ===subCategory ) {
          cy.wrap($el).click()
        } else {
          // do something else
        }
      })
}
//function to click on element
clickElement(var1) {
    switch (var1) {
      case "category": this.click(this.MAKEUP_CATEGORY);
        break;
    case "Add to Cart": this.click(this.ADD_TO_CART_LINK);
        break;
    case "checkout": this.click(this.CHECKOUT_BUTTON);
        break;
        case "Confirm Order":this.click(this.CONFIRM_ORDER_BUTTON);
        break;
        default:
    }
  }

  /**
   * This method is use to validate page headers or messages
   * @param {String} pageName 
   * @param {String} expHeader 
   */
  validatePageHedaer(pageName, expHeader) {
    switch (pageName) {
      case "welcome":
        cy.get(this.WELCOME_MESSAGE).then(function (element) {
          const actualText = element.text()
          expect(actualText.includes(expHeader)).to.be.true
        })
        break;
     case "checkout":
         cy.get(this.CHECKOUTPAGE_HEADER).then(function (element) {
           const actualText = element.text()
           expect(actualText.includes(expHeader)).to.be.true
         })
         break;
    case "Confirm Order":
        cy.get(this.CONFIRMATION_HEADER).then(function (element) {
           const actualText = element.text()
        expect(actualText.includes(expHeader)).to.be.true
         })
        break;
    case "success":
        cy.get(this.ORDER_PROCESSED_MESSAGE).then(function (element) {
            const actualText = element.text()
        expect(actualText.includes(expHeader)).to.be.true
        })
        break;  
    }
    /**function to validate product name
    *@param {String} expected profuct name
    */ 
    validateProductName(expProductName)
    {
        cy.get(this.FACE_PRODUCT).then(function (element) {
            const actualText = element.text()
            expect(actualText.includes(expHeader)).to.be.true
          })
    }
  }

  
  
  
}
module.exports = MakeUpPurchacePage;
//export default MakeUpPurchacePage;