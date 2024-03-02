import { useParams } from 'react-router-dom';
import { createDetail } from '../../data/boilerplate';
import { Viewer } from './Viewer';
import SpeckleViewer from '../speckleviewer/SpeckleViewer';

export const ViewerPage = () => {
	const { projectId } = useParams();

	console.log(projectId);

	return (
		<>
			<Viewer object={createDetail()} />
			<SpeckleViewer streamID='8cc01e745f' baseObjectID='26b5287a21b1355384960033c3de9c53' />
		</>
	);
};
