import { useState } from 'react';
import { IDetailObject } from '../../types/detailobject';
import { Switch } from 'antd';
import React from 'react';
import { SPECKLE_RENDER_ID, SpeckleViewer } from '../speckleviewer/SpeckleViewer';
import { DetailCard } from '../search/DetailCard';
import './viewer.css';

interface IViewerProps {
	object?: IDetailObject;
}

export const Viewer: React.FC<IViewerProps> = ({ object }) => {
	const [is2DView, setIs2DView] = useState(Boolean(object?.speckledata));

	return object ? (
		<div style={{ color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
			{object?.speckledata ? (
				<Switch
					checkedChildren={'3D'}
					unCheckedChildren={'2D'}
					onChange={setIs2DView}
					value={is2DView}
					style={{ width: 50 }}
				/>
			) : null}
			<div id='speckle-viewer' className={is2DView ? 'speckle-viewer-shown' : 'speckle-viewer-empty'}>
				{is2DView ? (
					<SpeckleViewer
						streamID={object.speckledata?.streamID as string}
						baseObjectID={object.speckledata?.baseObjectID as string}
					/>
				) : (
					<div id={SPECKLE_RENDER_ID} className='speckle-viewer-empty' />
				)}
			</div>
			<DetailCard object={object} />
		</div>
	) : (
		<div style={{ color: '#fff' }}>No object selected</div>
	);
};

