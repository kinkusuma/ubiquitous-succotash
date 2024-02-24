"use client";

import { Avatar, Button, Card, List } from "antd";
import React from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const SpedingHistoryList: React.FC = () => {
  return (
    <Card className='size-full'>
      <div className='flex justify-between mb-4'>
        <div className='font-semibold text-base'>Latest spending</div>

        <Button icon={<PiDotsThreeVerticalBold className='text-lg pt-1' />} />
      </div>

      <List
        className='mb-3'
        itemLayout='horizontal'
        dataSource={[
          { title: "Billing 1", description: "Sat, 12 Dec 2020" },
          { title: "Billing 2", description: "Mon, 14 Dec 2020" },
          { title: "Billing 3", description: "Tue, 15 Dec 2020" },
        ]}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar />}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />

      <Button type='link' className='w-full'>
        View all
      </Button>
    </Card>
  );
};

export default SpedingHistoryList;
