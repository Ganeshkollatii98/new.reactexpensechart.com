import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValuesArray = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const maxValue = Math.max(...dataPointValuesArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValueFromDataPoints={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
