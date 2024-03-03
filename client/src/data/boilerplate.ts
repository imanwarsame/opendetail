import { DetailTopologyCategory } from '../enums/detailcategories';
import { Locations } from '../enums/locations';
import { IDetailObject } from '../types/detailobject';
import { IDetailMetaData } from '../types/metadata';
import { constructionDetails } from './detailnames';
import { base64Images } from './imageasbase64';

const getRandomUUID = (): string => {
	const validChars = '0123456789abcdef';
	const s = (count: number) =>
		[...Array(count)].map(() => validChars[Math.floor(Math.random() * validChars.length)]).join('');
	const M = ['1', '2', '3', '4', '5'];
	const N = ['8', '9', 'a', 'b'];
	return `${s(7)}-${s(4)}-${M[Math.floor(Math.random() * M.length)]}${s(3)}-${N[Math.floor(Math.random() * N.length)]}${s(3)}-${s(12)}`;
};

export const createMetaData = (): IDetailMetaData => ({
	fireRating: 'good',
	rValue: 1.71,
	acousticPerformance: 0.5,
	globalWarmingPotential: 50,
	voc: ['VOC1', 'VOC2'],
	location: Object.values(Locations)[Math.floor(Math.random() * Object.values(Locations).length)],
	cost: (1 + Math.floor(Math.random() * 2.5)) as 1 | 2 | 3,
	biogenicRating: Math.random() * 0.5 + 0.5,
	populartity: Math.floor(Math.random() * 1000),
	dateAdded: new Date()
});

export const createDetail = (): IDetailObject => {
	const localDetail: IDetailObject = {
		id: getRandomUUID(),
		keyimage: base64Images[Math.floor(Math.random() * 4)],
		name: constructionDetails[Math.floor(Math.random() * constructionDetails.length)],
		description: 'Lorum Ipsum Dolor Sit Amet',
		topologyCategory: DetailTopologyCategory.Point,
		elements: [],
		metadata: createMetaData(),
		detailParts: []
	};

	if (Math.random() > 0.5)
		localDetail.speckledata = { streamID: '8cc01e745f', baseObjectID: '26b5287a21b1355384960033c3de9c53' };

	return localDetail;
};

export const createDetails = (count: number): IDetailObject[] => {
	const details: IDetailObject[] = [];
	for (let i = 0; i < count; i++) details.push(createDetail());

	// linking some of them together
	for (let i = 0; i < details.length; i++) {
		const linkedDetails = details.filter((_, index) => Math.random() > 0.9 && index !== i);
		details[i].metadata.alternativeObject = linkedDetails.map((d) => d.id);
	}

	return details;
};

