import { DetailCard } from './DetailCard';
import './detailcard.css';
import { useDetailStore } from '../../store';

interface IDetailSearchProps {
	style?: React.CSSProperties;
}

export const DetailSearch: React.FC<IDetailSearchProps> = ({ style }) => {
	const { state, reducers } = useDetailStore();

	return (
		<div className='detail-cards' style={style}>
			{state.allDetails.map((object, index) => (
				<DetailCard key={index} object={object} onClick={() => reducers.setSelectedDetail(object.id)} />
			))}
		</div>
	);
};

