var React = require('react');
var WidgetListItem = require('./WidgetListItem.jsx');

var WidgetList = React.createClass({
  render: function() {
    var Widgets = this.props.list;
    var widgetItems = Widgets.map(function(widget) {
      return <WidgetListItem key={widget.id} text={widget.text} value={widget.value} style={widget.style}/>;
    });
    return (
      <ul>{widgetItems}</ul>
    );
  }
});

module.exports = WidgetList;
