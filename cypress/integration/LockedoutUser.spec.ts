import LoginPage from '../support/PageModels/LoginPage';

describe('locked_out_user test', () => {
  it('Logs in as locked_out_user', () => {
    LoginPage.visitLoginPage();
    LoginPage.getLoginPageTitle().should('eq', 'Swag Labs');
    LoginPage.loginUser('locked_out_user');
  });
  it('Verifies error message', () => {
    expect(
      LoginPage.getErrorMessage().contains(
        'Epic sadface: Sorry, this user has been locked out.'
      )
    ).exist;
  });
  it('Clears error message', () => {
    LoginPage.dismissErrorMessage();
    LoginPage.getErrorMessage().should('not.be.exist');
  });
});
