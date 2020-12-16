// Checkout Page Object Model

/// <reference types="cypress" />

import User from './User';

class CheckoutPage {
  /**
   * @method getCheckoutButton
   */
  getCheckoutButton() {
    return cy.get('.btn_action.checkout_button');
  }
  /**
   * @method getFirstNameInput
   */
  getFirstNameInput() {
    return cy.get('#first-name');
  }
  /**
   * @method getLastNameInput
   */
  getLastNameInput() {
    return cy.get('#last-name');
  }
  /**
   * @method getFirstNameInput
   */
  getPostalCodeInput() {
    return cy.get('#postal-code');
  }
  /**
   * @method getCancelCheckoutButton
   */
  getCancelCheckoutButton() {
    return cy.get('.cart_cancel_link.btn_secondary');
  }
  /**
   * @method getContinueCheckoutButton
   */
  getContinueCheckoutButton() {
    return cy.get('.btn_primary.cart_button');
  }
  /**
   * @method getFinishCheckoutButton
   */
  getFinishCheckoutButton() {
    return cy.get('.btn_action.cart_button');
  }
  /**
   * @method getCompleteCheckoutHeader
   */
  getCompleteCheckoutHeader() {
    return cy.get('h2.complete-header');
  }
  /**
   * @method fillCheckoutInformation
   * @param firstName
   * @param lastName
   * @param postalCode
   */
  fillCheckoutInformation() {
    this.getFirstNameInput().type(User.getFirstName());
    this.getLastNameInput().type(User.getLastName());
    this.getPostalCodeInput().type(User.getPostalCode());
  }
  /**
   * @method clickCheckoutButton
   */
  clickCheckoutButton() {
    this.getCheckoutButton().click();
  }
  /**
   * @method clickContinueCheckoutButton
   */
  clickContinueCheckoutButton() {
    this.getContinueCheckoutButton().click();
  }
  /**
   * @method clickFinishCheckoutButton
   */
  clickFinishCheckoutButton() {
    this.getFinishCheckoutButton().click();
  }
}

export default new CheckoutPage();
