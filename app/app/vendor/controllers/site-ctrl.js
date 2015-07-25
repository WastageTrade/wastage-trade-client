'use strict';

var SiteCtrl = function ($rootScope, $anchorScroll) {
  const config = require('../../config/application.json');
  const locale = require('../../config/locale/pt-br.json');

  angular.extend($rootScope, config);
  angular.extend($rootScope, locale);

  $rootScope.goToAnchor = function(anchor) {
    $location.hash(anchor);
    $anchorScroll();
  };
};

module.exports = ['$rootScope', '$anchorScroll', SiteCtrl];
