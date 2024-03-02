import { ElementRole } from "../enums/elementsroles";
import { MaterialCategory } from "../enums/materialcategory";

export interface IBuildupPart {
    index: number;
    materialCategory: MaterialCategory;
    thickness: number;
    elementRole : ElementRole;
  
}