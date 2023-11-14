'use strict';

module.exports = {
  extends: 'ash-nazg/sauron-overrides',
  env: {
    browser: true
  },
  settings: {
    polyfills: [
      'Array.forEach',
      'document.body',
      'document.querySelector',
      'document.querySelectorAll',
      'navigator.registerProtocolHandler',
      'Object.keys',
      'URL'
    ]
  },
  rules: {

  }
};
