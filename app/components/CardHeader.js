var React = require('react');

var CardHeader = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.headerText}
      </div>
    )
  }
});

module.exports = CardHeader;
