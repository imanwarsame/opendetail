import { ElementRole } from "../enums/elementsroles";
import { MaterialCategory } from "../enums/materialcategory";

export interface IDetailPart {
    materialCategory: MaterialCategory; // The first level material category
    materialName : string; // a human readable material name (isn't standardized)
    width: number; // part Width in mm, how do we define orientation and coordinate system ? 
    height:number; // part Height in mm, idem.
    elementRole : ElementRole; // the function of this part
}