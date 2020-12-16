// Inventory Page Object Model

/// <reference types="cypress" />
/// <reference types="../" />

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
  /**
   * @method getAllInventoryImages
   */
  getAllInventoryImages() {
    cy.get('img.inventory_item_img').then((img) => {
      cy.fetchImage(img);
    });
  }
  /**
   * @method selectItemByName
   * @param itemName
   */
  selectItemByName(itenName: string) {
    this.getItemByName(itenName).click();
  }
}

export default new InventoryPage();
