import { Tabs } from 'antd';
import React, { ReactNode } from 'react';
import { IDetailObject } from '../../types/detailobject';
import { useDetailStore } from '../../store';
import { DetailCard } from '../search/DetailCard';
import { useNavigate } from 'react-router-dom';
import { CardDetail } from './card-details';

interface IViewerTabsProps {
	object: IDetailObject;
}

export const ViewerTabs: React.FC<IViewerTabsProps> = ({ object }) => {
	const { state, reducers } = useDetailStore();
	const navigate = useNavigate();

	console.log(object?.metadata?.alternativeObject);

	const onChange = (key: string) => {
		console.log(key);
	};

	const items = [
		{
			key: '1',
			label: 'Metrics',
			children: (<CardDetail object={object} />) as ReactNode
		},
		{
			key: '2',
			label: 'Alternatives',
			children: (
				<div className='detail-cards viewer-tab-container-content'>
					{state.allDetails
						.filter((otherObject) => object?.metadata?.alternativeObject?.includes(otherObject.id))
						.map((otherObject) => {
							return (
								<DetailCard
									key={otherObject.id}
									object={otherObject}
									onClick={() => {
										navigate(`/compositesearch/${otherObject.id}`);
										reducers.setSelectedDetail(otherObject.id);
									}}
								/>
							);
						})}
				</div>
			)
		}
	];
	return (
		<div className='viewer-tab-container'>
			<Tabs defaultActiveKey='1' tabPosition='top' items={items} />
		</div>
	);
};

