var React = require('react');

var WidgetListItem = React.createClass({

  render: function() {

    var divStyle = {
      "textAlign": "center",
      "color": "white"
    };

    var panelBodyStyle = {
      "height": 30
    };

    var panelHeaderStyle = {};

    if (this.props.style) {
      panelHeaderStyle = this.props.style;

    }
    return (
      <div style={divStyle} className="col-md-12 col-sm-12 col-xs-12">
        <div className="panel panel-default">
          <div style={panelHeaderStyle} className="panel-header">
            <p>{this.props.text}</p>
            <h2>{this.props.value}</h2>
          </div>
          <div style={panelBodyStyle} className="panel-body">

          </div>
        </div>
      </div>
    );
  }
});

module.exports = WidgetListItem;
