var React = require('react');

var Navigation = React.createClass({
  render: function() {
    return (
      <nav className="top-bar" role="navigation">
        <ul className="title-area">
          <li className="name">
            <h1><a href="#">Wastage Trade</a></h1>
          </li>
          <li className="toggle-topbar menu-icon"><a href="#"><span>Wastage Trade</span></a></li>
        </ul>
      </nav>
    );
  }
});

module.exports = Navigation
