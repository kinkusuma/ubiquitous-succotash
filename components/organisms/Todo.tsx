"use client";

import { Button, Card, Checkbox } from "antd";
import React from "react";
import {
  PiCaretRightBold,
  PiDotsThreeVerticalBold,
  PiPlusBold,
} from "react-icons/pi";

const Todo: React.FC = () => {
  return (
    <Card>
      <div className='font-semibold text-base mb-2'>List of items to buy</div>

      <div className='flex items-center gap-5 mb-5'>
        <div className=''>
          <div className='font-semibold text-xl mb-1'>12:00</div>
          <div className='text-slate-500 text-xs'>Sat, 02 Dec 2022</div>
        </div>
        <div className=''>
          <PiCaretRightBold className='text-lg text-slate-500' />
        </div>
        <div className=''>
          <div className='font-semibold text-xl mb-1'>22:00</div>
          <div className='text-slate-500 text-xs'>Sat, 12 Dec 2022</div>
        </div>
      </div>

      <div className='flex items-center justify-between mb-5'>
        <div className='flex gap-1'>
          <div className='text-slate-500'>0/3</div>
          <div className='font-semibold'>Shopping list</div>
        </div>
        <Button
          className='flex items-center'
          icon={<PiPlusBold />}
          size='small'
        >
          Add item
        </Button>
      </div>

      <div className='grid grid-cols-2 gap-3'>
        <div className='p-2 flex justify-between bg-slate-200 rounded-md'>
          <Checkbox>Buy milk</Checkbox>
          <Button
            icon={<PiDotsThreeVerticalBold className='text-lg pt-1' />}
            size='small'
          />
        </div>
        <div className='p-2 flex justify-between bg-slate-200 rounded-md'>
          <Checkbox>Buy milk</Checkbox>
          <Button
            icon={<PiDotsThreeVerticalBold className='text-lg pt-1' />}
            size='small'
          />
        </div>
        <div className='p-2 flex justify-between bg-slate-200 rounded-md'>
          <Checkbox>Buy milk</Checkbox>
          <Button
            icon={<PiDotsThreeVerticalBold className='text-lg pt-1' />}
            size='small'
          />
        </div>
        <div className='p-2 flex justify-between bg-slate-200 rounded-md'>
          <Checkbox>Buy milk</Checkbox>
          <Button
            icon={<PiDotsThreeVerticalBold className='text-lg pt-1' />}
            size='small'
          />
        </div>
      </div>
    </Card>
  );
};

export default Todo;
