'use strict';

var SiteCtrl = function ($rootScope) {
  const config = require('../../config/application.json');
  const locale = require('../../config/locale/pt-br.json');

  angular.extend($rootScope, config);
  angular.extend($rootScope, locale);
};

module.exports = ['$rootScope', SiteCtrl];
