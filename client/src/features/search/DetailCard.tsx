import { useDetailStore } from '../../store';
import { IDetailObject } from '../../types/detailobject';
import { LuFlower, LuStar, LuBanana } from 'react-icons/lu';

interface IDetailCardProps {
	object: IDetailObject;
	onClick?: () => void;
}

export const DetailCard: React.FC<IDetailCardProps> = ({ object, onClick }) => {
	const { state } = useDetailStore();

	return (
		<div
			className={`detail-card ${state.selectedDetail === object.id ? 'selected' : ''}`}
			key={object.id}
			onClick={onClick}
		>
			<div className='detail-card-img'>
				<img src={object.keyimage} />
			</div>
			<span className='detail-card-inset-title'>{object.id}</span>
			<div className='detail-card-title'>{object.name}</div>
			<div className='detail-card-quantities'>
				<div key='likes' className='detail-card-quantities-subobject'>
					<LuStar />
					<span>{object.metadata.populartity}</span>
				</div>
				<div key='enviroment' className='detail-card-quantities-subobject'>
					<LuFlower />
					<span>{object.metadata.biogenicRating}</span>
				</div>
				<div key='enviroment' className='detail-card-quantities-subobject'>
					<LuBanana />
					<span>{100}</span>
				</div>
			</div>
		</div>
	);
};

