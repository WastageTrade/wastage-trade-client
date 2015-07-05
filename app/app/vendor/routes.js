module.exports = function () {
  angular.module('app.routes', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', require('./routes/index').home)
      .when('/permission-denied', require('./routes/index').permission_denied)
      .when('/page-not-found', require('./routes/index').not_found)
      .otherwise({redirectTo: '/page-not-found'});
  }]);
};
