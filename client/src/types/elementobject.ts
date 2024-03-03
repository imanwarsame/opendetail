import { IBuildupPart } from './builduppart';
import { ElementType } from '../enums/elementtype';

export interface IElementObject {
	Name : string; // a human readable name for this element
	Code : string; // The element Code, how is it named in the bauteilkatalaog : "AW01", "SL02", etc.
	ElementType : ElementType; // mimic IFC Entities
	BuildupParts: IBuildupPart[]; // a list of buildup parts
}

