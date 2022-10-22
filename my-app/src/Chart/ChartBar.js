import "./styles/ChartBar.css";
const ChartBar = (props) => {
  var fillBarHeight = "0%";
console.log('maxL ' + props.maxValue)
  if (props.maxValue > 0) {
    fillBarHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="bar">
        <div className="fill" style={{ height: fillBarHeight }}></div>
      </div>
      <div className="label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
