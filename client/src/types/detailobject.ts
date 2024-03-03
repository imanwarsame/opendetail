import { DetailTopologyCategory } from '../enums/detailcategories';
import { IDetailPart } from './detailpart';
import { IElementObject } from './elementobject';
import { IDetailMetaData } from './metadata';

export interface IDetailObject {
	id: string; // GUID
	streamId: string;
	objectId: string;
	keyimage: string;
	name: string; // human readable name
	description: string; // free description
	topologyCategory: DetailTopologyCategory; // Linear, Punctual, 3d
	elements: IElementObject[]; // a list of elements
	detailPart: IDetailPart[]; // a list of detail parts that do not belong to the elements
	metadata: IDetailMetaData; // Attributes for this detail
}
