import LoginPage from '../support/PageModels/LoginPage';

describe('problem_user test', () => {
  it('Logs in as problem_user', () => {
    LoginPage.visitLoginPage();
    LoginPage.getLoginPageTitle().should('eq', 'Swag Labs');
    LoginPage.loginUser('problem_user');
  });
});
