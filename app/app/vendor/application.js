module.exports = function () {
  var app = angular.module('app', [
    'app.controllers',
  ]);

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });
};
