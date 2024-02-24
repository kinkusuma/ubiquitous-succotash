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

export interface CashFlowChartData {
  income: number;
  expenses: number;
}

export interface CashFlowStackedBarChartProps {
  data: CashFlowChartData;
}

ChartJS.register(CategoryScale, LinearScale, BarElement);

// This function converts the income and expenses plus separator to percentage equaly
// The purpose to adjust size of the bars
function convertToPercentage({ income, expenses }: CashFlowChartData) {
  const separator = (2 / 100) * (income + expenses); // 2% of the total
  const percIncome = (income / (income + expenses + separator)) * 100;
  const percExpenses = (expenses / (income + expenses + separator)) * 100;
  const percSeparator = (separator / (income + expenses + separator)) * 100;

  return { percIncome, percExpenses, percSeparator };
}

const CashFlowStackedBarChart: React.FC<CashFlowStackedBarChartProps> = ({
  data: propsData,
}) => {
  const { percIncome, percExpenses, percSeparator } =
    convertToPercentage(propsData);

  const data = {
    labels: ["Cash Flows"],
    datasets: [
      {
        label: "Expenses",
        data: [percExpenses],
        backgroundColor: colors.indigo[700],
      },
      {
        label: "Separator",
        data: [percSeparator],
        backgroundColor: "transparent",
      },
      {
        label: "Income",
        data: [percIncome],
        backgroundColor: colors.amber[500],
      },
    ],
  };

  const options = {
    indexAxis: "y" as "y",
    maintainAspectRatio: false,
    scales: {
      x: { display: false, stacked: true },
      y: { display: false, stacked: true },
    },
    elements: {
      bar: {
        borderRadius: 3,
        borderSkipped: "middle" as "middle",
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return <Bar options={options} data={data} />;
};

export default CashFlowStackedBarChart;
