import LoginPage from '../support/PageModels/LoginPage';

describe('performance_glitch_user test', () => {
  it('Logs in as performance_glitch_user', () => {
    LoginPage.visitLoginPage();
    LoginPage.getLoginPageTitle().should('eq', 'Swag Labs');
    LoginPage.loginUser('performance_glitch_user');
  });
});
