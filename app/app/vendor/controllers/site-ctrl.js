var SiteCtrl = function ($rootScope) {
  angular.extend($rootScope, require('../../config/application.json'));
};

module.exports = ['$rootScope', SiteCtrl];
