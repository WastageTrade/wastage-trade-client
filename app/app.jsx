var React = require('react');
var Navigation   = require('./components/Navigation.jsx');

var App = React.createClass({
  render: function() {
    return (
      <Navigation/>
    );
  }
});

module.exports = App;
