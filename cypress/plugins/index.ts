/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

import webpack from '@cypress/webpack-preprocessor';

module.exports = (on: any) => {
  const options = {
    webpackOptions: require('../../webpack.config.js'),
  };
  on('file:preprocessor', webpack(options));
};
