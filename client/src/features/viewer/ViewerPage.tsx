import { useParams } from 'react-router-dom';
import { createDetail } from '../../data/boilerplate';
import { Viewer } from './Viewer';

export const ViewerPage = () => {
	const { projectId } = useParams();

	console.log(projectId);

	return <Viewer object={createDetail()} />;
};

