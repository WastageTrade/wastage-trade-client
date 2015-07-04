module.exports = function () {
    angular.module('app.controllers', [])
      .controller('SiteCtrl', require('./controllers/site-ctrl'));
};
