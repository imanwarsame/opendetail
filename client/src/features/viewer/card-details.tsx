import React from 'react';
import { Button, Tabs, Select, Space, Typography } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { useDetailStore } from '../../store';
import { IDetailObject } from '../../types/detailobject';
import { LuFlower, LuStar, LuBanana, LuFeather, LuCloud, LuVolume2 } from 'react-icons/lu';
import { AiOutlineFire } from 'react-icons/ai';
import { BiWater } from 'react-icons/bi';

const { TabPane } = Tabs;
const { Option } = Select;
const { Title, Text } = Typography;

interface IDetailCardProps {
    object: IDetailObject;
    onClick?: () => void;
  }
  
  export const CardDetail: React.FC<IDetailCardProps> = ({ object, onClick }) => {
    return (
      <div className='flex h-screen w-[350px] flex-col bg-white'>
        <div className='flex items-center justify-between border-b p-4'>
          <Title level={4}>{object.name || "This is the title of the detail"}</Title>
          <UploadOutlined className='h-6 w-6 text-gray-600' />
        </div>
        <div className='flex items-center justify-between p-4'>
          <Space>
            <Button type='primary'>2D</Button>
            <Button>3D</Button>
          </Space>
          <Space>
            <UserOutlined className='h-4 w-4 text-gray-600' />
            <Text>Uploaded by</Text>
            <Text strong>"Lorena Jacques & Co"</Text>
          </Space>
        </div>
        <div className='flex-grow overflow-y-auto'>
          <Tabs defaultActiveKey='1'>
            <TabPane tab='Metrics' key='1'>
              Content for Metrics
            </TabPane>
            <TabPane tab='Alternatives' key='2'>
              Content for Alternatives
            </TabPane>
          </Tabs>
        </div>
        <div className='border-t p-4'>
          <Select defaultValue='architect' style={{ width: 120 }}>
            <Option value='architect'>Architect</Option>
            <Option value='engineer'>Engineer</Option>
            <Option value='builder'>Builder</Option>
            <Option value='other'>Other</Option>
          </Select>
        </div>
      </div>
    );
  };
  