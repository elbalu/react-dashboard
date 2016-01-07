var React = require('react');
var KPIListItem = require('./KPIListItem.jsx');



var KPIList = React.createClass({
  render: function() {
    var KPIs = this.props.list;
    var kpiItems = KPIs.map(function(kpi) {
      return <KPIListItem key={kpi.id} text={kpi.text} value={kpi.value} style={kpi.style}/>;
    });
    return (
      <ul>{kpiItems}</ul>
    );
  }
});

module.exports = KPIList;
