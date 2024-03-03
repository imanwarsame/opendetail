import { useParams } from 'react-router-dom';
import { createDetail } from '../../data/boilerplate';
import { Viewer } from './Viewer';

export const ViewerPage = () => {
	const { projectId } = useParams();

	console.log(projectId);

	return (
		<>
			<Viewer object={createDetail()} />
			<SpeckleViewer streamID='3437f8cf7b' baseObjectID='7d53bcf28c6696ecac8781684a0aa006' />
		</>
	);
};
