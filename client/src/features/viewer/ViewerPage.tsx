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
			<SpeckleViewer url='https://latest.speckle.systems/projects/8cc01e745f/models/23eb4454e8#embed=%7B%22isEnabled%22%3Atrue%7D' />
		</>
	);
};
