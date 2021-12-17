/// <reference types="cypress" />
class BasePage {
  navigateTo(url) {
    cy.visit(url);
  }
  navigateToBaseURL() {
    cy.visit("/");
  }
  click(locator) {
    if (locator.includes("//")) cy.xpath(locator).click();
    else cy.get(locator).click();
  }
  fill(locator, text) {
    if (locator.includes("//")) cy.xpath(locator).clear().type(text);
    else cy.get(locator).clear().type(text);
  }
  selectDropdownByTextOrValue(locator,textOrValue) {
    cy.get(locator).select(textOrValue);
  }
  getCurrentURL() {
    return cy.url();
  }
  getText(locator) {
    if (locator.includes("//")) return cy.xpath(locator).text();
    else return cy.get(locator).text();
  }
  getAttributeValue(locator, attribute) {
    return cy.get(locator).invoke("attr", attribute).as("attributeValue");
  }
  mouseHover(locator) {
    if (locator.includes("//")) cy.xpath(locator).trigger("mouseover");
    else cy.get(locator).trigger("mouseover");
  }
  scrollToBottomOfThePage() {
    cy.scrollTo("bottom");
  }
  scrollToTopOfThePage() {
    cy.scrollTo("top");
  }
  scrollToTheElement(locator) {
    if (locator.includes("//")) cy.xpath(locator).scrollIntoView();
    else cy.get(locator).scrollIntoView();
  }
  refreshThePage() {
    cy.reload();
  }
  checkIfElementVisible(locator) {
    cy.get(locator).should("be.visible");
  }
  check(locator){
    cy.get(locator).check();
  }
}
module.exports = BasePage;
