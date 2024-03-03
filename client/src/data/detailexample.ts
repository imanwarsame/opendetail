import { IDetailObject } from '../types/detailobject';
import { DetailTopologyCategory } from '../enums/detailcategories';
import { IElementObject } from '../types/elementobject';
import { IBuildupPart } from '../types/builduppart';
import { MaterialCategory } from '../enums/materialcategory';
import { ElementRole } from '../enums/elementsroles';
import { ElementType } from '../enums/elementtype';


const DetailExample : IDetailObject = {
    id: '',
    keyimage: '',
    name: '',
    description: '',
    topologyCategory: DetailTopologyCategory.Linear,
    elements : [
        {
            Name : "CLT BEAM",
            Code : "UZ01",
            ElementType : ElementType.Beam,
            BuildupParts : [
                {
                    index: 1,
                    materialCategory: MaterialCategory.MineralBuildingProducts,
                    materialName:"CLT Beam",
                    thickness: 233,
                    elementRole: ElementRole.LoadBearing,
                },
            ],
        },
        {
            Name : "Lignotrend Slab",
            Code : "SL01",
            ElementType : ElementType.Slab,
            BuildupParts : [
                {
                    index: 1,
                    materialCategory: MaterialCategory.MineralBuildingProducts,
                    materialName:"Gipsom",
                    thickness: 10,
                    elementRole: ElementRole.InnerFinish,
                },

                {
                    index: 2,
                    materialCategory: MaterialCategory.MineralBuildingProducts,
                    materialName:"Plaster for Gypsum",
                    thickness: 3,
                    elementRole: ElementRole.InnerFinish,
                },

                {
                    index: 3,
                    materialCategory: MaterialCategory.MineralBuildingProducts,
                    materialName:"Gipsom",
                    thickness: 3,
                    elementRole: ElementRole.InnerFinish,
                },

                {
                    index: 4,
                    materialCategory: MaterialCategory.InsulationMaterials,
                    materialName:"Insulation",
                    thickness: 3,
                    elementRole: ElementRole.InnerFinish,
                },
                {
                    index: 5,
                    materialCategory: MaterialCategory.Wood,
                    materialName:"Wood Laminated",
                    thickness: 210,
                    elementRole: ElementRole.LoadBearing,
                },
        
                {
                    index: 5,
                    materialCategory: MaterialCategory.MineralBuildingProducts,
                    materialName:"Balast",
                    thickness: 91,
                    elementRole: ElementRole.Insulation,
                },
                        
                {
                    index: 6,
                    materialCategory: MaterialCategory.Wood,
                    materialName:"Wood panel",
                    thickness: 16,
                    elementRole: ElementRole.LoadBearing,
                },
    
                {
                    index: 7,
                    materialCategory: MaterialCategory.Wood,
                    materialName:"Wood panel",
                    thickness: 16,
                    elementRole: ElementRole.LoadBearing,
                },
        
                {
                    index: 8,
                    materialCategory: MaterialCategory.InsulationMaterials,
                    materialName:"Underlay",
                    thickness: 5,
                    elementRole: ElementRole.Insulation,
                },
            
                {
                    index: 9,
                    materialCategory: MaterialCategory.InsulationMaterials,
                    materialName:"Cemwood",
                    thickness: 55,
                    elementRole: ElementRole.Insulation,
                },
        
                {
                    index: 10,
                    materialCategory: MaterialCategory.InsulationMaterials,
                    materialName:"Cellulose Insulation 2",
                    thickness: 20,
                    elementRole: ElementRole.Insulation,
                },
    
                {
                    index: 11,
                    materialCategory: MaterialCategory.InsulationMaterials,
                    materialName:"Cellulose Insulation 2",
                    thickness: 20,
                    elementRole: ElementRole.Insulation,
                },
    
                {
                    index: 12,
                    materialCategory: MaterialCategory.InsulationMaterials,
                    materialName:"Lithorherm",
                    thickness: 45,
                    elementRole: ElementRole.Insulation,
                },
    
                {
                    index: 12,
                    materialCategory: MaterialCategory.InsulationMaterials,
                    materialName:"Cemwood",
                    thickness: 45,
                    elementRole: ElementRole.Insulation,
                },

                {
                    index: 13,
                    materialCategory: MaterialCategory.InsulationMaterials,
                    materialName:"Gulvpap",
                    thickness: 1,
                    elementRole: ElementRole.Insulation,
                },

                {
                    index: 14,
                    materialCategory: MaterialCategory.Wood,
                    materialName:"Wood Finish",
                    thickness: 46,
                    elementRole: ElementRole.InnerFinish,
                },
            
                {
                    index: 15,
                    materialCategory: MaterialCategory.Wood,
                    materialName:"Wood Finish",
                    thickness: 12,
                    elementRole: ElementRole.InnerFinish,
                },
            

            ],
            },
            {
                Name : "Insulated Outer Wall",
                Code : "AW01",
                ElementType : ElementType.Wall,
                BuildupParts : [
                    {
                        index: 1,
                        materialCategory: MaterialCategory.MineralBuildingProducts,
                        materialName:"Gypsum",
                        thickness: 10,
                        elementRole: ElementRole.InnerFinish,
                    },  
                    {
                        index: 2,
                        materialCategory: MaterialCategory.MineralBuildingProducts,
                        materialName:"Plaster for Gypsum",
                        thickness: 3,
                        elementRole: ElementRole.InnerFinish,
                    },                
                    {
                        index: 3,
                        materialCategory: MaterialCategory.MineralBuildingProducts,
                        materialName:"Gypsum",
                        thickness: 10,
                        elementRole: ElementRole.InnerFinish,
                    }, 
                    {
                        index: 4,
                        materialCategory: MaterialCategory.InsulationMaterials,
                        materialName:"Soft Insulation",
                        thickness: 45,
                        elementRole: ElementRole.Insulation,
                    }, 
                    {
                        index: 5,
                        materialCategory: MaterialCategory.InsulationMaterials,
                        materialName:"PE Foil",
                        thickness: 2,
                        elementRole: ElementRole.Insulation,
                    }, 
                    {
                        index: 6,
                        materialCategory: MaterialCategory.Wood,
                        materialName:"Wood Plate",
                        thickness: 12,
                        elementRole: ElementRole.LoadBearing,
                    }, 
                    {
                        index: 7,
                        materialCategory: MaterialCategory.Wood,
                        materialName:"Vertical Stud",
                        thickness: 245,
                        elementRole: ElementRole.LoadBearing,
                    }, 
                    {
                        index: 7,
                        materialCategory: MaterialCategory.InsulationMaterials,
                        materialName:"Soft Insulation",
                        thickness: 245,
                        elementRole: ElementRole.Insulation,
                    }, 
                    {
                        index: 8,
                        materialCategory: MaterialCategory.MineralBuildingProducts,
                        materialName:"Gypsum",
                        thickness: 10,
                        elementRole: ElementRole.OuterFinish,
                    },             
                ]
                },
        ] ,
        detailParts: [
            {
                materialCategory: MaterialCategory.InsulationMaterials,
                materialName : "Sealing",
                width: 6,
                height:23,
                elementRole : ElementRole.Insulation,
            },

            {
                materialCategory: MaterialCategory.InsulationMaterials,
                materialName : "Sealing",
                width: 24,
                height:13,
                elementRole : ElementRole.Insulation,
            },
            {
                materialCategory: MaterialCategory.InsulationMaterials,
                materialName : "Insulation",
                width: 145,
                height:249,
                elementRole : ElementRole.Insulation,
            },
            {
                materialCategory: MaterialCategory.Wood,
                materialName : "Sill",
                width: 245,
                height:145,
                elementRole : ElementRole.LoadBearing,
            },
            {
                materialCategory: MaterialCategory.Wood,
                materialName : "Sill Stopper",
                width: 45,
                height:45,
                elementRole : ElementRole.LoadBearing,
            },
            {
                materialCategory: MaterialCategory.InsulationMaterials,
                materialName : "Sill Insulation",
                width: 245,
                height:20,
                elementRole : ElementRole.Insulation,
            },
            {
                materialCategory: MaterialCategory.InsulationMaterials,
                materialName : "Sill Seal",
                width: 70,
                height:20,
                elementRole : ElementRole.Insulation,
            },
            {
                materialCategory: MaterialCategory.InsulationMaterials,
                materialName : "Sill Insulation",
                width: 245,
                height:10,
                elementRole : ElementRole.Insulation,
            },
            {
                materialCategory: MaterialCategory.InsulationMaterials,
                materialName : "Sill Insulation",
                width: 245,
                height:10,
                elementRole : ElementRole.Insulation,
            },
            {
                materialCategory: MaterialCategory.Wood,
                materialName : "Sill",
                width: 245,
                height:45,
                elementRole : ElementRole.LoadBearing,
            },
            {
                materialCategory: MaterialCategory.InsulationMaterials,
                materialName : "Upper Insulation",
                width: 115,
                height:107,
                elementRole : ElementRole.Insulation,
            },
            {
                materialCategory: MaterialCategory.Wood,
                materialName : "Upper Sill Bottom",
                width: 90,
                height:45,
                elementRole : ElementRole.LoadBearing,
            },
            {
                materialCategory: MaterialCategory.Wood,
                materialName : "Upper Sill Top",
                width: 90,
                height:45,
                elementRole : ElementRole.LoadBearing,
            },
        ],
        metadata : {
        fireRating: 'Class B',
        rValue: 1.71,
        acousticPerformance: 0.5,
        globalWarmingPotential: 50,
        voc: ['VOC1', 'VOC2'],
        location: 'Finland',
        cost: 1,
        biogenicRating: 0.99,
        populartity: 100,
        dateAdded: new Date()
        }
    
    }


