import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(dataPointValues);
  return (
    <div>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint}
          value={dataPoint.value}
          maxValue={totalMaximum}
          laber={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
