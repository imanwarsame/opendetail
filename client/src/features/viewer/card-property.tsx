import React from 'react';
import { Button, Tabs, Select, Space, Typography, Descriptions } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { useDetailStore } from '../../store';
import { IDetailObject } from '../../types/detailobject';
import { LuFlower, LuStar, LuBanana, LuFeather, LuCloud, LuVolume2 } from 'react-icons/lu';
import { AiOutlineFire } from 'react-icons/ai';
import { BiWater } from 'react-icons/bi';
import { IDetailMetaData } from '../../types/metadata';
import { Card } from 'antd';
const { Meta } = Card;
const { TabPane } = Tabs;
const { Option } = Select;
const { Title, Text } = Typography;

interface IProps {
    propertyKey: string;
    value: string;
  }
  
  
  export const CardProperty: React.FC<IProps> = ({ propertyKey, value }) => {
 
    
    return (
      <div className='flex h-screen w-[400px] flex-col bg-white'>
        <Descriptions column={1}>
          <Descriptions.Item label={propertyKey} className="w-[200px]">{value}</Descriptions.Item>
        </Descriptions>

      </div>
    );
  };
  