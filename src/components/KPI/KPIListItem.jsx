var React = require('react');

var KPIListItem = React.createClass({

  render: function() {

    var divStyle = {
      "textAlign": "center"
    };

    var panelStyle = {};

    if (this.props.style) {
      panelStyle = this.props.style;

    }

    return (
      <div style={divStyle} className="col-md-3 col-sm-6 col-xs-6">
        <div style={panelStyle} className="panel panel-default">
          <div className="panel-header">
            <h2>{this.props.value}</h2>
          </div>
          <div className="panel-body">
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = KPIListItem;
