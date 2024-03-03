import { useEffect, useState } from 'react';
import { IDetailObject } from '../../types/detailobject';
import { Switch } from 'antd';
import React from 'react';
import { SpeckleViewer } from '../speckleviewer/SpeckleViewer';
import './viewer.css';
import { useDetailStore } from '../../store';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PdfCreator } from '../pdfCreator/pdfCreator';
import { FaPrint } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { ViewerTabs } from './ViewerData';

interface IViewerProps {
	object?: IDetailObject;
}

export const Viewer: React.FC<IViewerProps> = ({ object }) => {
	const { reducers } = useDetailStore();
	const [is2DView, setIs2DView] = useState(Boolean(object?.speckledata));

	const clearSelectedDetail = () => {
		reducers.setSelectedDetail(null);
	};

	useEffect(() => {
		setIs2DView(Boolean(object?.speckledata));
	}, [object]);

	return object ? (
		<div className='viewer'>
			<div key='viewer-navbar' className='viewer-navbar'>
				<RxCross1
					className='viewer-navbar-title'
					style={{ cursor: 'pointer', paddingRight: 20 }}
					onClick={clearSelectedDetail}
				/>
				<span className='viewer-navbar-title'>{object.name}</span>
			</div>
			<div id='speckle-viewer' className={is2DView ? 'speckle-viewer-shown' : 'speckle-viewer-empty'}>
				{object?.speckledata && (
					<Switch
						checkedChildren={'3D'}
						unCheckedChildren={'2D'}
						onChange={setIs2DView}
						value={is2DView}
						style={{ width: 50, position: 'absolute', left: 10, top: 50 }}
					/>
				)}
				{is2DView ? (
					<>
						<SpeckleViewer
							streamID={object.speckledata?.streamID as string}
							baseObjectID={object.speckledata?.baseObjectID as string}
						/>
						<div style={{ position: 'absolute', top: 495, right: 15 }}>
							<PDFDownloadLink document={<PdfCreator detailObject={object} />}>
								{({ loading }) =>
									loading ? (
										<button>Loading document...</button>
									) : (
										<button>
											<FaPrint />
										</button>
									)
								}
							</PDFDownloadLink>
						</div>
					</>
				) : null}
			</div>
			<ViewerTabs object={object} />
		</div>
	) : (
		<div style={{ color: '#fff' }}>No object selected</div>
	);
};

