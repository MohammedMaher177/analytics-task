import Chart from "react-apexcharts";

export default function Location() {
  const a = [300, 55, 41, 67, 22, 43, 21, 49];
  const b = [900, 23, 20, 8, 13, 27, 33, 12];
  const c = [200, 17, 15, 15, 21, 14, 15, 13];
  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      stackType: `$${3}K`,
      // stackType: `100%`,
    },
    stroke: {
      width: [20, 20, 20],
      position: "center",
      borderRadius: 0,
    },
    plotOptions: {
      bar: {
        borderRadius: [0, 0, 0],
        dataLabels: {
          position: "center", // top, center, bottom
          total: {
            enabled: false,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return Math.round(val) + "K";
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
        "1",
        "2011 Q2",
        "2011 Q3",
        "2011 Q4",
        "2012 Q1",
        "2012 Q2",
        "2012 Q3",
        "2012 Q4",
      ],
    },
    yaxis: {
      type: "time",
      categories: ["1", "2", "3", "4"],
    },
    fill: {
      opacity: 1,
      // colors: ["#FB4540", "#00F2DE", ""],
      // type: "gradient",
      // gradient: {
      //   colorFrom: "#D8E3F0",
      //   colorTo: "#BED1E6",
      //   stops: [50, 100],
      //   opacityFrom: 0.6,
      //   opacityTo: 0.8,
      // },
      style: {
        width: "5px",
      },
    },
    legend: {
      show: false,
      position: "right",
      offsetX: 0,
      offsetY: 50,
    },
  };
  const series =  [
    {
      name: 'Actual',
      data: [
        {
          x: '2011',
          y: 12,
          goals: [
            {
              name: 'Expected',
              value: 14,
              strokeWidth: 2,
              strokeDashArray: 2,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2012',
          y: 44,
          goals: [
            {
              name: 'Expected',
              value: 54,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2013',
          y: 54,
          goals: [
            {
              name: 'Expected',
              value: 52,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2014',
          y: 66,
          goals: [
            {
              name: 'Expected',
              value: 61,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2015',
          y: 81,
          goals: [
            {
              name: 'Expected',
              value: 66,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2016',
          y: 67,
          goals: [
            {
              name: 'Expected',
              value: 70,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        }
      ]
    }
  ]
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
