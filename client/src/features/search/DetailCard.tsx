import { IDetailObject } from '../../types/detailobject';

interface IDetailCardProps {
	object: IDetailObject;
	onClick?: () => void;
}

export const DetailCard: React.FC<IDetailCardProps> = ({ object, onClick }) => {
	return (
		<div key={object.id} onClick={onClick}>
			<img src={object.keyimage} />
			<span>{object.name}</span>
		</div>
	);
};

