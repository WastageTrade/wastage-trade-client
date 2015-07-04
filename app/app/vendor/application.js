module.exports = function () {
  var app = angular.module('app', [
    'app.controllers',
    'app.routes'
  ]);

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });
};
