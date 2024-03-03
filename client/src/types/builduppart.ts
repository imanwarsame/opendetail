import { ElementRole } from '../enums/elementsroles';
import { MaterialCategory } from '../enums/materialcategory';

export interface IBuildupPart {
	// A buildup part is essentially a layer in the element sandwich

	index: number; // the "order" of this part in the buildup. Multiple parts can have the same index and then they would be merged in the same layer
	// INDEX STARTS AT 1 ! (because I decided so...)
	materialCategory: MaterialCategory; // first level material category
	materialName : string; // human readable material name, isn't standardized, use with caution
	thickness: number; // the thickness of this layer
	elementRole: ElementRole; // the function of this layer
}
