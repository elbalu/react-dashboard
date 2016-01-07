var React = require('react');
var ReactDOM = require('react-dom');

var WatchPanel = require('./components/watchPanel/WatchPanel.jsx');

var KPIList = require('./components/KPI/KPIList.jsx');
var kpiData = require('./components/data/kpi');

var WidgetList = require('./components/widget/WidgetList.jsx');
var widgetData = require('./components/data/widget');

ReactDOM.render(<KPIList list={kpiData}/>, document.getElementById('kpi-1'));
ReactDOM.render(<WatchPanel />, document.getElementById('kpi-2'));
ReactDOM.render(<WatchPanel />, document.getElementById('kpi-4'));
ReactDOM.render(<WidgetList list={widgetData}/>, document.getElementById('kpi-3'));
// ReactDOM.render(<KPIList title="Chritmas" headingColor="#b31217"/>, document.getElementById('kpi-3'));
