require('angular');
require('angular-route');

$ = jQuery = require('../bower_components/jquery/dist/jquery.min.js');
require('../bower_components/bootstrap/dist/js/bootstrap.min.js');
require('./vendor/controllers')();
require('./vendor/routes')();
require('./vendor/application')();
