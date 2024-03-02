import { DetailTopologyCategory } from '../enums/detailcategories';
import { IDetailObject } from '../types/detailobject';

const getRandomUUID = (): string => {
	const validChars = '0123456789abcdef';
	const s = (count: number) =>
		[...Array(count)].map(() => validChars[Math.floor(Math.random() * validChars.length)]).join('');
	const M = ['1', '2', '3', '4', '5'];
	const N = ['8', '9', 'a', 'b'];
	return `${s(7)}-${s(4)}-${M[Math.floor(Math.random() * M.length)]}${s(3)}-${N[Math.floor(Math.random() * N.length)]}${s(3)}-${s(12)}`;
};

export const createDetail = (): IDetailObject => {
	const localDetail: IDetailObject = {
		id: getRandomUUID(),
		keyimage:
			'data:image/png;base64,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',
		name: 'I am Boilerplate',
		description: 'Lorum Ipsum Dolor Sit Amet',
		topologyCategory: DetailTopologyCategory.Point,
		elements: []
	};

	return localDetail;
};
