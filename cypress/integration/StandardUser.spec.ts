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
  it('Checks is all product images are loaded', () => {
    InventoryPage.getAllInventoryImages();
  });
  it('Selects an item and adds to cart', () => {
    InventoryPage.selectItemByName('Sauce Labs Backpack');
    expect(
      InventoryItemPage.getInventoryDetailsName().contains(
        'Sauce Labs Backpack'
      )
    ).exist;
    InventoryItemPage.addItemToCart();
    expect(InventoryItemPage.getRemoveFromCartButton()).exist;
  });
  it('Goes to checkout and completes it', () => {
    NavigationBar.navigateToCheckout();
    CheckoutPage.clickCheckoutButton();
    CheckoutPage.fillCheckoutInformation();
    CheckoutPage.clickContinueCheckoutButton();
    CheckoutPage.clickFinishCheckoutButton();
    expect(
      CheckoutPage.getCompleteCheckoutHeader().contains(
        'THANK YOU FOR YOUR ORDER'
      )
    ).exist;
  });
});
