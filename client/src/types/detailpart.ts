import { ElementRole } from "../enums/elementsroles";
import { MaterialCategory } from "../enums/materialcategory";

export interface IDetailPart {
    materialCategory: MaterialCategory;
    width: number;
    height:number;
    elementRole : ElementRole;
}