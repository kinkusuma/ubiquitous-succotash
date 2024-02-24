"use client";

import React from "react";

const CreditCard: React.FC = () => {
  return (
    <div
      className='size-full flex flex-col justify-between p-5 rounded-2xl
    bg-gradient-to-bl from-indigo-900 to-indigo-500 text-white'
    >
      <div className='flex justify-between items-start'>
        <div className='font-semibold text-xl'>S. Bank</div>
        <div className='font-bold text-xl italic'>VISA</div>
      </div>

      <div className='flex justify-between items-end'>
        <div className=''>
          <div className='text-xs'>Card Number</div>
          <div className='text-lg mb-2'>**** **** **** 1234</div>

          <div className='font-semibold'>John Doe</div>
        </div>
        <div className='font-bold'>12/23</div>
      </div>
    </div>
  );
};

export default CreditCard;
