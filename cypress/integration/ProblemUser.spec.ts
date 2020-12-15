// <reference types="../support" />
import InventoryPage from '../support/PageModels/InventoryPage';
import LoginPage from '../support/PageModels/LoginPage';

describe('problem_user test', () => {
  it('Logs in as problem_user', () => {
    LoginPage.visitLoginPage();
    LoginPage.getLoginPageTitle().should('eq', 'Swag Labs');
    LoginPage.loginUser('problem_user');
  });
  it('Checks is all product images are loaded', () => {
    InventoryPage.getAllInventoryImages();
  });
});
