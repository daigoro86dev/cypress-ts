// Login Page Object Model

/// <reference types="cypress" />

class LoginPage {
  /**
   * @method getLoginPageTitle()
   * @description Get login page title
   */
  getLoginPageTitle() {
    return cy.title();
  }
  /**
   * @method getUsernameInput
   * @description Get username input
   */
  getUsernameInput() {
    return cy.get('#user-name');
  }
  /**
   * @method getPasswordInput
   * @description Get password input
   */
  getPasswordInput() {
    return cy.get('#password');
  }
  /**
   * @method getLoginBtn
   * @description Get login button
   */
  getLoginBtn() {
    return cy.get('#login-button');
  }
  /**
   *
   * @method getErrorMessage
   * @description
   * @param msg The error message text
   */
  getErrorMessage() {
    return cy.get('h3[data-test="error"]');
  }
  /**
   * @method getErrorMsgButton
   * @description Get error message button
   */
  getErrorMsgButton() {
    return cy.get('button.error-button');
  }
  /**
   * @method visitLoginPage
   * @description Navigate to login page and clear session storage
   */
  visitLoginPage() {
    cy.visit('/', {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear();
      },
    });
  }
  /**
   * @method loginUser
   * @description Login user
   * @param username
   * @param password
   */
  loginUser(username: string, password: string = 'secret_sauce') {
    this.getUsernameInput().type(username);
    this.getPasswordInput().type(password);
    this.getLoginBtn().click();
  }
  /**
   * @method dismissErrorMessage
   * @description Dismisses the login form error message
   */
  dismissErrorMessage() {
    this.getErrorMsgButton().click();
  }
}

export default new LoginPage();
