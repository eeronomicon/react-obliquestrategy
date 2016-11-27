var React = require('react');
require('../styles/styles.css');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
