"use client";

import { Avatar, Button, Input } from "antd";
import React from "react";
import { PiPaperclipBold, PiSmileyStickerBold } from "react-icons/pi";

const Chatting: React.FC = () => {
  return (
    <div className='min-h-48 size-full flex flex-col justify-between p-5 rounded-2xl bg-white'>
      <div className=''>
        <div className=''>
          <div className='font-semibold text-base mb-5'>Jane Doe</div>

          <div className='grid gap-2'>
            <div className='flex gap-2 items-center justify-end'>
              <div className='p-2 bg-slate-200 rounded-xl rounded-br-none'>
                <div>Hi, how are you?</div>
              </div>
              <Avatar />
            </div>

            <div className='flex gap-2 items-center'>
              <Avatar />
              <div className='p-2 bg-slate-200 rounded-xl rounded-bl-none'>
                <div>I'm fine, thank you</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='p-2 bg-slate-200 rounded-md'>
        <Input className='mb-2' placeholder='Type a message' />
        <div className='flex justify-between gap-2'>
          <div className='flex gap-1'>
            <Button icon={<PiSmileyStickerBold className='text-lg pt-1' />} />
            <Button icon={<PiPaperclipBold className='text-lg pt-1' />} />
          </div>

          <Button type='primary'>Send Message</Button>
        </div>
      </div>
    </div>
  );
};

export default Chatting;
