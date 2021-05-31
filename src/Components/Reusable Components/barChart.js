import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ label, data }) => {
  return (
    <>
      <Bar
        data={{
          labels: label,
          datasets: [
            {
              label: "Users increase count in past days",
              // fill: true,
              backgroundColor: "#0065fd",
              hoverBackgroundColor: "#6100ec",
              borderColor: "transparent",
              // borderColor: "#d048b6",
              // borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: data,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
          },
          responsive: true,
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </>
  );
};

export default BarChart;
