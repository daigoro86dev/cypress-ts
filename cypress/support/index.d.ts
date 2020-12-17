/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Fetch image of a given product
     * @function fetchImage
     * @param img
     */
    fetchImage(img: any): void;
  }
}
