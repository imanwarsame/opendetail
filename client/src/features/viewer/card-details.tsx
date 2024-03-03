import React from 'react';
import { Button, Tabs, Select, Space, Typography } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { IDetailObject } from '../../types/detailobject';
import { CardProperty } from './card-property';
import { Card } from 'antd';
const { Option } = Select;
const { Title, Text } = Typography;

interface IDetailCardProps {
	object: IDetailObject;
	onClick?: () => void;
}

export const CardDetail: React.FC<IDetailCardProps> = ({ object, onClick }) => {
	console.log(object);

	return (
		<div className='flex h-screen w-[350px] flex-col bg-white'>
			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
				<div className='flex items-center justify-between border-b p-4'>
					<UploadOutlined className='h-6 w-6 text-gray-600' />
				</div>
				<div className='flex items-center justify-between p-4'>
					<Space>
						<UserOutlined className='h-4 w-4 text-gray-600' />
						<Text>Uploaded by</Text>
						<Text strong>"Lorena Jacques & Co"</Text>
					</Space>
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

			<div className='property-cards'>
				<Card className='property-card'>
					<p>
						{object.metadata.dateAdded ? (
							<CardProperty
								propertyKey='Date added'
								value={object.metadata.dateAdded.toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})}
							/>
						) : null}
					</p>
					<p>
						{object.metadata.location ? (
							<CardProperty propertyKey='Location' value={object.metadata.location as string} />
						) : null}
					</p>
					<p>
						{object?.metadata?.populartity ? (
							<CardProperty propertyKey='Popularity' value={object?.metadata?.populartity as string} />
						) : null}
					</p>
					<p>
						{object.metadata.cost ? <CardProperty propertyKey='Cost [DKK]' value={object.metadata.cost as string} /> : null}
					</p>
				</Card>
				<Card className='property-card'>
					<p>
						{object.metadata.fireRating ? (
							<CardProperty propertyKey='Fire rating' value={object.metadata.fireRating as string} />
						) : null}
					</p>
					<p>
						{object.metadata.acousticPerformance ? (
							<CardProperty propertyKey='Acoustic performance' value={object.metadata.acousticPerformance as string} />
						) : null}
					</p>
				</Card>
				<Card className='property-card'>
					<p>
						{object.metadata.biogenicRating ? (
							<CardProperty propertyKey='Biogenic rating' value={object.metadata.biogenicRating as string} />
						) : null}
					</p>
					<p>
						{object.metadata.rValue ? (
							<CardProperty propertyKey='R Value [m2K/W]' value={object.metadata.rValue as string} />
						) : null}
					</p>
					<p>
						{object.metadata.globalWarmingPotential ? (
							<CardProperty propertyKey='GWP`[kgCO2/m2]' value={object.metadata.globalWarmingPotential as string} />
						) : null}
					</p>
				</Card>
			</div>
		</div>
	);
};

