import { IDetailObject } from '../../types/detailobject';

interface IViewerProps {
	object?: IDetailObject;
}

export const Viewer: React.FC<IViewerProps> = ({ object }) => {
	return object ? (
		<div style={{ color: '#fff' }}>{object.id}</div>
	) : (
		<div style={{ color: '#fff' }}>No object selected</div>
	);
};

