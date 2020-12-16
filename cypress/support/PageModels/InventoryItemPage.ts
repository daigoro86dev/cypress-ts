// Inventory Item Page Object Model

/// <reference types="cypress" />

class InventoryItemPage {
  /**
   * @method getInventoryDetailsName
   */
  getInventoryDetailsName() {
    return cy.get('.inventory_details_name');
  }
  /**
   * @method getInventoryDetailsPrice
   */
  getInventoryDetailsPrice() {
    return cy.get('.inventory_details_price');
  }
  /**
   * @method getAddToCartButton
   */
  getAddToCartButton() {
    return cy.get('.btn_primary.btn_inventory');
  }
  /**
   * @method getRemoveFromCartButton
   */
  getRemoveFromCartButton() {
    return cy.get('.btn_secondary.btn_inventory');
  }
  /**
   * @method getInventoryDetailsBackButton
   */
  getInventoryDetailsBackButton() {
    return cy.get('.inventory_details_back_button');
  }
  /**
   * @method addItemToCart
   */
  addItemToCart() {
    this.getAddToCartButton().click();
  }
}

export default new InventoryItemPage();
