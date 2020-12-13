// User Class

/// <reference types="cypress" />
/// <reference types="faker" />

import { name, address } from 'faker';

class User {
  /**
   * @property firstName
   * @property lastName
   * @property postalCode
   */
  firstName: string;
  lastName: string;
  postalCode: string;
  /**
   * @constructor
   */
  constructor() {
    this.firstName = name.firstName();
    this.lastName = name.lastName();
    this.postalCode = address.zipCode();
  }
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getPostalCode() {
    return this.postalCode;
  }
}

export default new User();
