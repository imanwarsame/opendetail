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
			<SpeckleViewer url='https://latest.speckle.dev/streams/92b620fb17/objects/32978115e9bb09a43407d535ea313a09' />
		</>
	);
};
