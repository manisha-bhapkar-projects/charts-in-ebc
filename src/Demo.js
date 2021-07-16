import React from "react";
import { Pie, Doughnut, Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [65, 59, 80, 81, 56],
    },
  ],
};

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
            // maintainAspectRatio:false
          }}
//           width={20}
// height={10}
// options={{maintainAspectRatio: false}}
        />

        <Doughnut
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
              width:"200",
              height:"200"
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
        <Bar
          className="bar_chart"
          data={state}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
          //   width={10}
          //   height={10}
        //   options={{ maintainAspectRatio: true }}
        //   responsive={true}
        />
        <Line data={state} width={500} height={100}></Line>
      </div>
    );
  }
}
