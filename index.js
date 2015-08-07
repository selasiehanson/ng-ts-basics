'use strict';

/** CSS Stuff **/
//require("./assets/css/bootstrap.css");
//require("./assets/css/index.scss");

/** JS Stuff **/
require('angular');
require('angular-aria');
require('angular-animate');
require('angular-ui-router');
//require('angular-formly');
require('angular-sanitize');
//require('angular-formly-templates-bootstrap');
//require('ui-select');
document.write(require("./base.html"));
var html  = require("./base.html");
var app  = require('./app/app');

angular.element(document).ready(function () {  
  angular.bootstrap(document, [app.app.name], {
    // strictDi: true
  });
});
