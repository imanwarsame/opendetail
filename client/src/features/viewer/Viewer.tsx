import { useState } from 'react';
import { IDetailObject } from '../../types/detailobject';
import { Switch } from 'antd';
import React from 'react';
import { SPECKLE_RENDER_ID, SpeckleViewer } from '../speckleviewer/SpeckleViewer';
import { DetailCard } from '../search/DetailCard';
import {CardDetail} from './card-details';
import './viewer.css';
import { useDetailStore } from '../../store';

interface IViewerProps {
	object?: IDetailObject;
}

export const Viewer: React.FC<IViewerProps> = ({ object }) => {
	const { reducers } = useDetailStore();
	const [is2DView, setIs2DView] = useState(Boolean(object?.speckledata));

	const clearSelectedDetail = () => {
		reducers.setSelectedDetail(null);
	};

	return object ? (
		<div style={{ color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
			<div key='viewer-navbar' className='viewer-navbar'>
				{object?.speckledata ? (
					<Switch
						checkedChildren={'3D'}
						unCheckedChildren={'2D'}
						onChange={setIs2DView}
						value={is2DView}
						style={{ width: 50 }}
					/>
				) : (
					<div />
				)}
				<button onClick={clearSelectedDetail}>X</button>
			</div>
			<div id='speckle-viewer' className={is2DView ? 'speckle-viewer-shown' : 'speckle-viewer-empty'}>
				{is2DView ? (
					<SpeckleViewer
						streamID={object.speckledata?.streamID as string}
						baseObjectID={object.speckledata?.baseObjectID as string}
					/>
				) : null}
			</div>
			<DetailCard object={object} />
			<CardDetail object={object}/>
		</div>
	) : (
		<div style={{ color: '#fff' }}>No object selected</div>
	);
};

