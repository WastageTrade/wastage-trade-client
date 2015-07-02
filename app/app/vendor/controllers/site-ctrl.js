var SiteCtrl = function ($rootScope) {
  $rootScope.template = require('../../config/application.json').template;
};

module.exports = ['$rootScope', SiteCtrl];
