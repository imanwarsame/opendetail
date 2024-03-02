import { useState } from 'react';
import { IDetailObject } from '../../types/detailobject';
import { DetailCard } from './DetailCard';
import { createDetail } from '../../data/boilerplate';

interface IDetailSearchProps {
	objects: IDetailObject[];
}

export const DetailSearch: React.FC<IDetailSearchProps> = ({ objects }) => {
	const [details] = useState<IDetailObject[]>([...Array(10)].map(() => createDetail()));

	return (
		<div>
			{details.map((object, index) => (
				<DetailCard key={index} object={object} />
			))}
		</div>
	);
};

