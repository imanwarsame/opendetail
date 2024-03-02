import { DetailTopologyCategory } from '../enums/detailcategories';
import { IElementObject } from './elementobject';
import { IDetailMetaData } from './metadata';

export interface IDetailObject {
	id: string;
	keyimage: string;
	name: string;
	description: string;
	topologyCategory: DetailTopologyCategory;
	elements: IElementObject[];
	metadata: IDetailMetaData;
}

