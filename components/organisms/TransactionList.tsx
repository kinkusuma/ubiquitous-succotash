"use client";

import { Avatar, Button, Card, List } from "antd";
import React from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const TransactionList: React.FC = () => {
  return (
    <Card className='size-full'>
      <div className='flex justify-between mb-4'>
        <div className='font-semibold text-base'>Transaction</div>

        <div className='flex gap-1'>
          <Button type='primary' size='small'>
            Newest
          </Button>
          <Button type='text' size='small'>
            Oldest
          </Button>
        </div>
      </div>

      <List
        itemLayout='horizontal'
        dataSource={[
          { title: "User 1", description: "Sat, 12 Dec 2020", total: "$ 12" },
          { title: "User 2", description: "Mon, 14 Dec 2020", total: "$ 32.5" },
          { title: "User 3", description: "Tue, 15 Dec 2020", total: "$ 5" },
        ]}
        renderItem={(item, index) => (
          <List.Item
            key={index}
            actions={[
              <Button
                key={`action-more-${index}`}
                icon={<PiDotsThreeVerticalBold className='text-lg pt-1' />}
              />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar />}
              title={item.title}
              description={
                <div className='flex justify-between'>
                  <div>{item.description}</div>
                  <div className='font-bold'>{item.total}</div>
                </div>
              }
            />
          </List.Item>
        )}
      />

      <Button className='w-full' type='link'>
        View all
      </Button>
    </Card>
  );
};

export default TransactionList;
