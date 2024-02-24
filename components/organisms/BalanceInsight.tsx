"use client";

import React, { useState } from "react";
import { Button, Card, Divider } from "antd";
import {
  PiArrowCircleUpBold,
  PiCaretDownBold,
  PiCoinsDuotone,
} from "react-icons/pi";
import BalanceLineChart from "../atoms/BalanceLineChart";
import BalanceBarChart from "../atoms/BalanceBarChart";

const BalanceInsight: React.FC = () => {
  const [month, setMonth] = useState(["Oct", "Nov", "Dec", "Jan", "Feb"]);

  return (
    <Card className='size-full leading-4'>
      <div className='flex justify-between mb-2'>
        <div className='font-semibold text-base'>Balance Statistic</div>

        <Button
          className='flex items-center'
          icon={<PiCaretDownBold />}
          size='small'
        >
          Filter
        </Button>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {/* col 1 */}
        <div className='grid gap-1'>
          <div className='font-semibold text-3xl'>$100</div>

          <div className='flex gap-2 items-center'>
            <PiCoinsDuotone className='text-2xl text-amber-500' />
            <div className=''>Your total balance</div>
          </div>

          <Divider className='m-1' />

          <div className='h-10 grid grid-cols-3 grid-rows-1 gap-2'>
            <div className='col-span-2'>
              <BalanceLineChart
                data={month.map((m) => ({ month: m, value: Math.random() }))}
              />
            </div>
            <div className='flex gap-1 items-center'>
              <PiArrowCircleUpBold className='text-base' />
              <div className=''>6%</div>
            </div>
          </div>

          <div className='text-slate-500'>Always see your earnings update</div>
        </div>

        {/* col 2 */}
        <div className='col-span-2'>
          <BalanceBarChart
            data={month.map((m) => ({
              month: m,
              value: Math.random(),
              lastValue: Math.random(),
            }))}
          />
        </div>
      </div>
    </Card>
  );
};

export default BalanceInsight;
