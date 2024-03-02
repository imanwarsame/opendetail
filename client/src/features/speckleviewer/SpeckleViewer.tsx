interface SpeckleViewerInputs {
	url: string;
}

export default function SpeckleViewer({ url }: SpeckleViewerInputs) {
	console.log(url);

	return <>{url}</>;
}
