import { useDetailStore } from '../../store';
import { IDetailObject } from '../../types/detailobject';
import { LuFlower, LuStar, LuBanana, LuFeather, LuCloud, LuVolume2 } from 'react-icons/lu';
import { AiOutlineFire } from 'react-icons/ai';
import { BiWater } from 'react-icons/bi';

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
				<div className='detail-card-img icons'>
					<div className='detail-card-icon'>
						<LuFeather size={12} style={{ color: 'black', transform: 'translate(3px,-2px)' }} />
					</div>
					<div className='detail-card-icon' style={{ left: 15 }}>
						<LuCloud size={12} style={{ color: 'black', transform: 'translate(3px,-2px)' }} />
					</div>
					<div className='detail-card-icon' style={{ left: 30 }}>
						<LuVolume2 size={12} style={{ color: 'black', transform: 'translate(3px,-2px)' }} />
					</div>
					<div className='detail-card-icon' style={{ left: 45 }}>
						<AiOutlineFire size={12} style={{ color: 'black', transform: 'translate(3px,-2px)' }} />
					</div>
					<div className='detail-card-icon' style={{ left: 60 }}>
						<BiWater size={12} style={{ color: 'black', transform: 'translate(3px,-2px)' }} />
					</div>
				</div>
			</div>
			<span className='detail-card-inset-title'>{object.description}</span>
			<div className='detail-card-title'>{object.name}</div>
			<div className='detail-card-quantities'>
				<div key='likes' className='detail-card-quantities-subobject'>
					<LuStar />
					<span>{object.metadata.populartity}</span>
				</div>
				<div key='enviroment' className='detail-card-quantities-subobject'>
					<LuFlower />
					<span>{object.metadata.biogenicRating?.toPrecision(2)}</span>
				</div>
				<div key='enviroment' className='detail-card-quantities-subobject'>
					<LuBanana />
					<span>{`${Math.round((object.metadata ? Object.keys(object.metadata).length / 10 : 0) * 100)} %`}</span>
				</div>
			</div>
		</div>
	);
};

