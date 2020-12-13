// Inventory Page Object Model

/// <reference types="cypress" />

class InventoryPage {
  /**
   * @method getItemByName
   * @param itemName
   */
  getItemByName(itemName: string) {
    return cy.get('div.inventory_item_name').contains(itemName);
  }
  /**
   * @method getItemById
   * @param itemId
   */
  getItemById(itemId: number) {
    return cy.get(`#item_${itemId}_title_link`);
  }
}

export default new InventoryPage();
