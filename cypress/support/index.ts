/**
 * @function fetchImage
 * @description Get the image based on element src attribute
 */
Cypress.Commands.add('fetchImage', (img: any) => {
  cy.get(img)
    .invoke('attr', 'src')
    .then((src) => {
      cy.request({
        url: src,
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
});
