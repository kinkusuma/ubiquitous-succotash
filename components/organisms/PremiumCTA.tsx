"use client";

import { Avatar, Button, Card, Divider, List } from "antd";
import React from "react";
import CashFlowStackedBarChart from "../atoms/CashFlowStackedBarChart";
import { PiCrownDuotone, PiDotsThreeVerticalBold } from "react-icons/pi";

const PremiumCTA: React.FC = () => {
  return (
    <Card className='size-full'>
      <div className='flex justify-center mb-4'>
        <div className='font-semibold text-base'>Go to premium</div>
      </div>

      <PiCrownDuotone className='text-5xl text-amber-500' />

      <div className='font-bold text-lg mb-3'>Need more features?</div>
      <div className='mb-5'>
        Update your account to premium to get more features.
      </div>

      <Button className='w-full' type='primary'>
        Get now
      </Button>
    </Card>
  );
};

export default PremiumCTA;
