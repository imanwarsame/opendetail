import {
	Viewer,
	DefaultViewerParams,
	SpeckleLoader,
	ViewerEvent,
	SelectionEvent,
	FilteringExtension
} from '@speckle/viewer';
import { CameraController, SelectionExtension } from '@speckle/viewer';
import { Component } from 'react';

interface SpeckleViewerInputs {
	streamID: string;
	baseObjectID: string;
}

class SpeckleViewer extends Component<SpeckleViewerInputs> {
	constructor(props: SpeckleViewerInputs) {
		super(props);
	}

	async componentDidMount() {
		const { streamID, baseObjectID } = this.props;

		//Speckle commit URL
		const speckleStreamURL = 'https://latest.speckle.systems/streams/' + streamID + '/objects/' + baseObjectID;

		/** Get the HTML container */
		const container = document.getElementById('renderer') as HTMLElement;

		/** Configure the viewer params */
		const params = DefaultViewerParams;
		params.showStats = false;
		params.verbose = false;

		/** Create Viewer instance */
		const viewer = new Viewer(container, params);

		/** Initialise the viewer */
		await viewer.init();

		/** Add measurements extension */
		// const measurements = viewer.createExtension(MeasurementsExtension);
		// /** In PERPENDICULAR mode, you can double click to automatically measure
		//  *  along the start point surface normal. Give it a go!  */
		// const measurementsParams = {
		// 	type: MeasurementType.POINTTOPOINT, //MeasurementType.PERPENDICULAR
		// 	vertexSnap: true, // false
		// 	units: 'm', // "cm, in, ft, mi"
		// 	precision: 2,
		// 	visible: true
		// };
		// measurements.enabled = true;
		// measurements.options = measurementsParams;

		/** Add the stock camera controller extension */
		const cameraController = viewer.createExtension(CameraController);
		cameraController.controls.maxPolarAngle = Math.PI; //Allows free orbit, will not be free with pi/2

		/** Add the selection extension for extra interactivity */
		viewer.createExtension(SelectionExtension);

		/** Add the filtering extension for further controls */
		const filterController = viewer.createExtension(FilteringExtension);

		//Gets selected object information
		viewer.on(ViewerEvent.ObjectClicked, (selectionInfo: SelectionEvent) => {
			//Selection event contains the entire hit chain
			//First hit is the closest one and generally the one you need
			//Hits contain the node and the hit point

			//Check if you have clicked on an object
			if (selectionInfo !== null) {
				const clickedObj = selectionInfo.hits[0].node.model.raw; //TODO: We can add this to a pop up modal if we have time
				this.setState({ selectedObj: clickedObj });
				console.log(clickedObj);

				filterController.resetFilters();
				filterController.isolateObjects([clickedObj.id]); //Ghosts objects that are not selected
			} else {
				this.setState({ selectedObj: null }); //Reset state, this will hide selected item details
				filterController.resetFilters(); //Reset ghosting
			}
		});

		/** Create a loader for the speckle stream */
		const loader = new SpeckleLoader(
			viewer.getWorldTree(),
			speckleStreamURL,
			'534eb89d07a092fcd8e3c07ceac4320a4bc1d5b301'
		);

		/** Load the speckle data */
		await viewer.loadObject(loader, true);
	}

	render() {
		return (
			<div
				id='renderer'
				style={{
					border: '1px solid green',
					height: '50vh',
					width: '50vw',
					position: 'fixed',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					zIndex: 0,
					overflow: 'hidden'
				}}
			></div>
		);
	}
}

export default SpeckleViewer;
