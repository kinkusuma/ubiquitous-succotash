"use client";

import { Card, Divider } from "antd";
import React from "react";
import CashFlowStackedBarChart from "../atoms/CashFlowStackedBarChart";

const CashFlowInsight: React.FC = () => {
  return (
    <Card className='size-full'>
      <div className='font-semibold text-lg mb-4'>Expenses and income</div>

      <div className='flex items-center justify-between gap-2 mb-3'>
        <div className='grid gap-1'>
          <div className='font-semibold'>Expenses</div>
          <div className='font-bold text-2xl'>70%</div>
          <div className='text-xs text-slate-500'>5412</div>
        </div>

        <Divider className='bg-slate-500 min-h-10' type='vertical' />

        <div className='grid gap-1'>
          <div className='font-semibold'>Income</div>
          <div className='font-bold text-2xl'>30%</div>
          <div className='text-xs text-slate-500'>2931</div>
        </div>
      </div>

      <div className='h-8'>
        <CashFlowStackedBarChart
          data={{
            income: 30,
            expenses: 70,
          }}
        />
      </div>
    </Card>
  );
};

export default CashFlowInsight;
