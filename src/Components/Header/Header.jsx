import { useState } from "react";
import Chart from "react-apexcharts";

export default function Header() {
  const columnsData = [-50, 20, 165, -30, 110, 80, -70, 165, 90, 70, -95, 100];
  const linesData = [-60, -10, 175, 25, 120, 90, -90, 175, 80, 70, -100, 115];
  const bg = columnsData.map((el) => (el >= 0 ? "#080008" : "#c587c5"));
  // eslint-disable-next-line no-unused-vars
  const [options, setoptions] = useState({
    series: [
      {
        name: "",
        type: "column",
        data: columnsData,
        // colors: bg,
        background: bg,
        dataLabels: {
          style: {
            colors: bg,
          },
        },
      },
      {
        name: "",
        type: "line",
        data: linesData,
      },
    ],
    noData: {
      text: "Loading...",
    },
    chart: {
      height: "350",
      type: "line",
    },
    forecastDataPoints: {
      count: 12,
      
    },
    stroke: {
      width: [0, 4],
      curv: "straight",
    },
    title: {
      text: "Traffic Sources",
    },
    markers: {
      //   colors: bg,
    },
    // colors: bg,
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    fill: {
      //   colors: bg,
      opacity: [0.98, 0.99, 1, 1],
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    xaxis: {
      type: "date",
    },
    yaxis: [
      {
        title: {
          text: "Website Blog",
        },
      },
      {
        opposite: true,
        title: {
          text: "Social Media",
        },
      },
    ],
  });
  return (
    <div>
      <Chart
        options={options}
        series={options.series}
        height="850"
        type="line"
        width="100%"
      >
        solved
      </Chart>
    </div>
  );
}
