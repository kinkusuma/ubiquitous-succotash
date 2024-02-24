"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import colors from "tailwindcss/colors";

export interface BalanceChartEnum {
  month: string;
  value: number;
}

export interface BalanceChartData extends Array<BalanceChartEnum> {}

export interface BalanceLineChartProps {
  data: BalanceChartData;
}

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

const BalanceLineChart: React.FC<BalanceLineChartProps> = ({
  data: propsData,
}) => {
  const labels = propsData.map((d) => d.month);
  const values = propsData.map((d) => d.value);

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: values,
        borderColor: colors.indigo[700],
        backgroundColor: colors.indigo[700],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: {
      line: {
        borderJoinStyle: "round" as "round",
        tension: 0.4,
      },
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return <Line options={options} data={data} />;
};

export default BalanceLineChart;
