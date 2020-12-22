require('babel-register')();

var jsdom = require('mocha-jsdom');

var exposedProperties = ['window', 'navigator', 'document'];
document = jsdom('http://node.example.com/');
global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;