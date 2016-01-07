var React = require('react');
var KPIList = require('../KPI/KPIList.jsx');
var watchPanelData = require('../data/watchPanel');

var WatchPanel = React.createClass({
  render: function() {

    var divStyle = {
      marginTop: 10
    };

    var headingStyle = {};
    if (this.props.headingColor) {
      headingStyle.backgroundColor = this.props.headingColor;
    }

    return (
      <div style={divStyle} className="col-sm-12 col-md-12">
        <div className="panel panel-primary">
          <div style={headingStyle} className="panel-heading">
            <h3>{this.props.title}</h3>
          </div>
          <div className="row panel-body">
            <KPIList list={watchPanelData}/>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = WatchPanel;
