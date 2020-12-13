// Navigation Bar Class

/// <reference types="cypress" />

class NavigationBar {
  /**
   * @method getHamburgerMenu
   */
  getOpenHamburgerMenuButton() {
    return cy.get('.bm-burger-button button');
  }
  /**
   * @method getHamburgerMenu
   */
  getcloseHamburgerMenuButton() {
    return cy.get('.bm-cross-button button');
  }
  /**
   * @method getSidebarInventoryLink
   */
  getSidebarInventoryLink() {
    return cy.get('#inventory_sidebar_link');
  }
  /**
   * @method getSidebarAboutLink
   */
  getSidebarAboutLink() {
    return cy.get('#about_sidebar_link');
  }
  /**
   * @method getSidebarLogoutLink
   */
  getSidebarLogoutLink() {
    return cy.get('#logout_sidebar_link');
  }
  /**
   * @method getSidebarReserStateLink
   */
  getSidebarReserStateLink() {
    return cy.get('#reset_sidebar_link');
  }
  /**
   * @method getNavbarCartLink
   */
  getNavbarCartLink() {
    return cy.get('#shopping_cart_container a');
  }
}

export default new NavigationBar();
