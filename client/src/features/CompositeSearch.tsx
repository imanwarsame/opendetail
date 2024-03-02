import { Viewer } from './viewer/Viewer';
import { DetailSearch } from './search/DetailSearch';
import './compositesearch.css';
import { useDetailStore } from '../store';

export const CompositeSearch = () => {
	const { state } = useDetailStore();

	return (
		<>
			<div className='composite-search'>
				<div className={`composite-search search ${state.selectedDetail ? 'show' : 'hide'}`}>
					<DetailSearch />
				</div>
				<div className={`composite-search viewer ${state.selectedDetail ? 'show' : 'hide'}`}>
					<Viewer object={state.selectedDetail ? state.allDetails.find((o) => o.id === state.selectedDetail) : undefined} />
				</div>
			</div>
		</>
	);
};

