"use client";

import { Button, Card } from "antd";
import React from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import AnalyticsDoughnutChart from "../atoms/AnalyticsDoughnutChart";

const TransactionInsight: React.FC = () => {
  return (
    <Card className='size-full'>
      <div className='flex justify-between mb-4'>
        <div className='font-semibold text-base'>Analytics</div>

        <Button icon={<PiDotsThreeVerticalBold className='text-lg pt-1' />} />
      </div>

      <div className='relative w-full h-56'>
        <AnalyticsDoughnutChart
          data={{
            done: 45,
            todo: 25,
            inProgress: 20,
            unCategorized: 10,
          }}
        />

        <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <div className='text-2xl font-semibold mb-1'>90%</div>
          <div className='text-sm'>Done</div>
        </div>
      </div>
    </Card>
  );
};

export default TransactionInsight;
