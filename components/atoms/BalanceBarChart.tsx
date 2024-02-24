"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import colors from "tailwindcss/colors";

export interface BalanceCompareChartEnum {
  month: string;
  value: number;
  lastValue: number;
}

export interface BalanceCompareChartData
  extends Array<BalanceCompareChartEnum> {}

export interface BalanceBarChartProps {
  data: BalanceCompareChartData;
}

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BalanceBarChart: React.FC<BalanceBarChartProps> = ({
  data: propsData,
}) => {
  const labels = propsData.map((d) => d.month);
  const values = propsData.map((d) => d.value);
  const lastValues = propsData.map((d) => d.lastValue);

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: values,
        borderColor: colors.indigo[700],
        backgroundColor: colors.indigo[700],
      },
      {
        label: "Last Year Income",
        data: lastValues,
        borderColor: colors.indigo[300],
        backgroundColor: colors.indigo[300],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
      },
      y: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value: string | number) {
            return "$" + value;
          },
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return <Bar options={options} data={data} />;
};

export default BalanceBarChart;
