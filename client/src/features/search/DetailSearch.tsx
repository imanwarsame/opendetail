import { DetailCard } from './DetailCard';
import './detailcard.css';
import { useDetailStore } from '../../store';
import { useNavigate } from 'react-router-dom';
import { DetailSearchFilter } from './DetailSearchFilter';
import { useState, useEffect } from 'react';
import { IDetailObject } from '../../types/detailobject';

interface IDetailSearchProps {
	style?: React.CSSProperties;
}

export const DetailSearch: React.FC<IDetailSearchProps> = ({ style }) => {
	const { state, reducers } = useDetailStore();
	const [visibleObject, setVisibleObject] = useState<IDetailObject[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		setVisibleObject(state.allDetails);
	}, [state.allDetails]);

	return (
		<div className='detail-cards' style={style}>
			<DetailSearchFilter objects={state.allDetails} onFilter={setVisibleObject} />
			{visibleObject.map((object, index) => (
				<DetailCard
					key={index}
					object={object}
					onClick={() => {
						navigate(`/compositesearch/${object.id}`);
						reducers.setSelectedDetail(object.id);
					}}
				/>
			))}
		</div>
	);
};
