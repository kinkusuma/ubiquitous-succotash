"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import colors from "tailwindcss/colors";

export interface AnalyticsChartData {
  done: number;
  inProgress: number;
  todo: number;
  unCategorized: number;
}

export interface AnalyticsDoughnutChartProps {
  data: AnalyticsChartData;
}

ChartJS.register(CategoryScale, LinearScale, ArcElement, Legend);

const AnalyticsDoughnutChart: React.FC<AnalyticsDoughnutChartProps> = ({
  data: propsData,
}) => {
  const { done, inProgress, todo, unCategorized } = propsData;
  const labels = ["Done", "In Progress", "To Do", "Un-Categorized"];
  const values = [done, inProgress, todo, unCategorized];
  const backgroundColor = [
    colors.indigo[700],
    colors.amber[500],
    colors.rose[600],
    colors.slate[300],
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Percentage",
        data: values,
        backgroundColor: backgroundColor,
      },
    ],
  };

  const options = {
    circumference: 180,
    rotation: -90,
    cutout: 70,
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  const plugins = [
    {
      id: "roundEdges",
      beforeDraw: function (chart: ChartJS<"doughnut">) {
        const arcs = chart.getDatasetMeta(0).data;
        arcs.forEach(function (arc: any) {
          arc.round = {
            x: (chart.chartArea.left + chart.chartArea.right) / 2,
            y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
            radius: (arc.outerRadius + arc.innerRadius) / 2,
            thickness: (arc.outerRadius - arc.innerRadius) / 2,
            backgroundColor: arc.options.backgroundColor,
          };
        });
      },
      afterDraw: (chart: ChartJS<"doughnut">) => {
        const { ctx } = chart;
        chart.getDatasetMeta(0).data.forEach((arc: any) => {
          const endAngle = Math.PI / 2 - arc.endAngle;
          ctx.save();
          ctx.translate(arc.round.x, arc.round.y * 1.93);
          ctx.fillStyle = arc.options.backgroundColor;
          ctx.beginPath();
          ctx.arc(
            arc.round.radius * Math.sin(endAngle),
            arc.round.radius * Math.cos(endAngle),
            arc.round.thickness,
            0,
            2 * Math.PI
          );
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        });
      },
    },
  ];

  return <Doughnut options={options} data={data} />;
};

export default AnalyticsDoughnutChart;
