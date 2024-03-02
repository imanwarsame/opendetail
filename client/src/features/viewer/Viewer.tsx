import { useParams } from 'react-router-dom';
import { DetailCard } from '../search/DetailCard';
import { createDetail } from '../../data/boilerplate';

export const Viewer = () => {
	const { projectId } = useParams();

	return <DetailCard object={createDetail()} />;
};

