import Chart from "react-apexcharts";

export default function Location() {
  const a = [50, 20, 165, -30, 110, 80, -70, 165, 90, 70, -95, 100];
  const b = [30, -10, 175, 25, 120, 90, -90, 175, 80, 70, -100, 115];
  const c = [20, -10, 175, 25, 120, 90, -90, 175, 80, 70, -100, 115];
  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      stackType: "100%",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "center", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + "K";
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    xaxis: {
      categories: [
        "2011 Q1",
        "2011 Q2",
        "2011 Q3",
        "2011 Q4",
        "2012 Q1",
        "2012 Q2",
        "2012 Q3",
        "2012 Q4",
      ],
    },
    fill: {
      opacity: 1,
      colors: ["#FB4540", "#00F2DE", ""],
    },
    legend: {
      position: "right",
      offsetX: 0,
      offsetY: 50,
    },
  };
  const series = [
    {
      name: "PRODUCT A",
      data: [300, 55, 41, 67, 22, 43, 21, 49],
    },
    {
      name: "PRODUCT B",
      data: [900, 23, 20, 8, 13, 27, 33, 12],
    },
    {
      name: "PRODUCT C",
      data: [1800, 17, 15, 15, 21, 14, 15, 13],
    },
  ];
  return (
    <Chart
      options={options}
      series={series}
      height="350"
      type="bar"
      width="100%"
    >
      solved
    </Chart>
  );
}
