import { DetailCard } from './DetailCard';
import './detailcard.css';
import { useDetailStore } from '../../store';
import { useNavigate } from 'react-router-dom';

interface IDetailSearchProps {
	style?: React.CSSProperties;
}

export const DetailSearch: React.FC<IDetailSearchProps> = ({ style }) => {
	const { state, reducers } = useDetailStore();
	const navigate = useNavigate();

	return (
		<div className='detail-cards' style={style}>
			{state.allDetails.map((object, index) => (
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

