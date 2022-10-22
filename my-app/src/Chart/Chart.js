import "./styles/Chart.css";
import ChartBar from "./ChartBar";
import react from 'react'

const Chart = (props) => {
    var values = props.dataPoints.map((item) => item.value);

    var maxValue = Math.max(...values);

    
  return (
    <div className="chart">
      {props.dataPoints?.map((dataPoint, i) => (
        <ChartBar 
            key={i} 
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue = {maxValue} />
      ))}
    </div>
  );
};

export default Chart;
