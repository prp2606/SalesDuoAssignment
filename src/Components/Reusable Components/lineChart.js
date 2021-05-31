import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ label, data, title }) => {
  return (
    <>
      <Line
        data={{
          labels: label,
          datasets: [
            {
              label: title,
              fill: true,
              // backgroundColor: gradientStroke,
              backgroundColor: "#e0d2f5",
              borderColor: "#6100ec",
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: "#6100ec",
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: "#6100ec",
              pointBorderWidth: 20,
              pointHoverRadius: 0,
              pointHoverBorderWidth: 15,
              pointRadius: 0,
              data: data,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          // tooltips: {
          //   backgroundColor: "#f5f5f5",
          //   titleFontColor: "#333",
          //   bodyFontColor: "#666",
          //   bodySpacing: 4,
          //   xPadding: 12,
          //   mode: "nearest",
          //   intersect: 0,
          //   position: "nearest",
          // },
          responsive: true,
          scales: {
            xAxes: [
              {
                ticks: { display: false },
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
              },
            ],
            yAxes: [
              {
                ticks: { display: false },
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
              },
            ],
          },
        }}
      />
    </>
  );
};

export default LineChart;
