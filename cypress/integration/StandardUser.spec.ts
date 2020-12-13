import LoginPage from '../support/PageModels/LoginPage';

describe('standard_user test', () => {
  it('Logs in as standard_user', () => {
    LoginPage.visitLoginPage();
    LoginPage.getLoginPageTitle().should('eq', 'Swag Labs');
    LoginPage.loginUser('standard_user');
  });
});
