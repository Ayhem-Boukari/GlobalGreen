"use client";

import type { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

type PropsType = {
  data: {
    emissions: { x: string; y: number }[]; // Carbon emissions data
    target: { x: string; y: number }[]; // Target carbon emissions data
  };
};

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function WeeklyCarbonEmissionChart({ data }: PropsType) {
  const options: ApexOptions = {
    colors: ["#ff5722", "#4caf50"], // Customize colors for carbon emissions
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
              columnWidth: "25%",
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 3,
        columnWidth: "25%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "inherit",
      fontWeight: 500,
      fontSize: "14px",
      markers: {
        size: 9,
        shape: "circle",
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="-ml-3.5 mt-3">
      <Chart
        options={options}
        series={[
          {
            name: "Actual Emissions",
            data: data.emissions,
          },
          {
            name: "Target Emissions",
            data: data.target,
          },
        ]}
        type="bar"
        height={370}
      />
    </div>
  );
}
