import Chart from "react-apexcharts";
import { Box } from "@mui/material";
import TrafficHeader from "./TrafficHeader.jsx";
export default function Traffic() {
  const columnsData = [-50, 20, 165, -30, 110, 80, -70, 165, 90, 70, -95, 100];
  const linesData = [-60, -10, 175, 25, 120, 90, -90, 175, 80, 70, -100, 115];
  const options = {
    series: [
      {
        name: "",
        type: "column",
        data: columnsData,
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
      background: "linear-gradient(116.82deg, #060B27 0%, #2F014C 100%)",
      toolbar: {
        tools: false,
      },
    },
    forecastDataPoints: {
      count: 12,
    },
    stroke: {
      width: [0, 2],
      height: [0, 10],
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    fill: {
      type: "solid",
      pattern: {
        style: "circles",
        width: 6,
        height: 6,
        strokeWidth: 2,
      },
      colors: [
        function ({ value }) {
          if (value < 0) {
            return "#FB4540";
          } else {
            return "#0082CC";
          }
        },
      ],
      //   opacity: [0.98, 0.99, 1, 1],
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
        opposite: false,
        title: {
          text: "",
        },
        categories: [-100, -50, 0, 50, 100, 200, 250, 300],
      },
    ],
  };

  return (
    <Box
      sx={{
        // background: "linear-gradient(116.82deg, #060B27 0%, #2F014C 100%)",
        background: "transparent",
        // filter:"drop-shadow(10px 10px 25px rgba(0, 0, 0, 0.25))",
        height: "60vh",
      }}
    >
      <TrafficHeader />
      <Chart
        options={options}
        series={options.series}
        height="550"
        type="line"
        width="100%"
      >
        solved
      </Chart>
    </Box>
  );
}
