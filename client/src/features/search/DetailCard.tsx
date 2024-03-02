import { IDetailObject } from '../../types/detailobject';

interface IDetailCardProps {
	object: IDetailObject;
}

export const DetailCard: React.FC<IDetailCardProps> = ({ object }) => {
	return (
		<div key={object.id}>
			<img src={object.keyimage} />
			<span>{object.name}</span>
		</div>
	);
};

