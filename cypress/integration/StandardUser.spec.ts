import CheckoutPage from '../support/PageModels/CheckoutPage';
import InventoryItemPage from '../support/PageModels/InventoryItemPage';
import InventoryPage from '../support/PageModels/InventoryPage';
import LoginPage from '../support/PageModels/LoginPage';
import NavigationBar from '../support/PageModels/NavigationBar';

describe('standard_user test', () => {
  it('Logs in as standard_user', () => {
    LoginPage.visitLoginPage();
    LoginPage.getLoginPageTitle().should('eq', 'Swag Labs');
    LoginPage.loginUser('standard_user');
  });
  it('Selects an item and adds to cart', () => {
    InventoryPage.getItemByName('Sauce Labs Backpack').click();
    expect(
      InventoryItemPage.getInventoryDetailsName().contains(
        'Sauce Labs Backpack'
      )
    ).exist;
    InventoryItemPage.getAddToCartButton().click();
    expect(InventoryItemPage.getRemoveFromCartButton()).exist;
  });
  it('Goes to checkout and confirm product selection', () => {
    NavigationBar.getNavbarCartLink().click();
    CheckoutPage.getCheckoutButton().click();
    CheckoutPage.fillCheckoutInformation();
    CheckoutPage.getContinueCheckoutButton().click();
  });
});
