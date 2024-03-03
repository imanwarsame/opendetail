using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace OpenDetailAPI.Models
{
    public enum DetailTopologyCategory
    {
        Point,
        Linear,
        Volume,
    }

    public enum ElementRole
    {
        LoadBearing,
        Insulation,
        InnerFinish,
        OuterFinish,
    }

    public enum MaterialCategory
    {
        MineralBuildingProducts,
        InsulationMaterials,
        Wood,
        Metals,
        Plastics,
        Paints,
    }

    public enum ElementType
    {
        Beam,
        Bearing,
        BuildingElementProxy,
        BuildingSystem,
        Chimney,
        Column,
        Covering,
        CurtainWall,
        Door,
        Member,
        Plate,
        Railing,
        Ramp,
        RampFlight,
        RelConnectsPathElements,
        RelCoversBldgElements,
        RelCoversSpaces,
        Roof,
        ShadingDevice,
        Slab,
        Stair,
        StairFlight,
        Wall,
        WallStandardCase,
        Window
    }

    // Interfaces to Classes
    public class BuildupPart
    {
        public int Index { get; set; }
        public string? MaterialName { get; set; }
        public MaterialCategory MaterialCategory { get; set; }
        public double Thickness { get; set; }
        public ElementRole ElementRole { get; set; }
    }

    public class DetailObject
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId? Id { get; set; }
        public string? URL { get; set; }
        public string? streamID { get; set; }
        public string? objectID { get; set; }
        public string? Keyimage { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public DetailTopologyCategory TopologyCategory { get; set; }
        public List<ElementObject> Elements { get; set; } = new List<ElementObject>();
        public List<DetailPart> DetailPart { get; set; } = new List<DetailPart>();
        public Metadata Metadata { get; set; }
        public List<SpeckleData> SpeckleData { get; set; } = new List<SpeckleData>();


        [BsonExtraElements()]
        public Dictionary<string, object>? ExtraElements { get; set; }
    }

    public class DetailPart
    {
        public MaterialCategory MaterialCategory { get; set; }
        public string? MaterialName { get; set; }
        public double Width { get; set; }
        public double Height { get; set; }
        public ElementRole ElementRole { get; set; }
    }

    public class ElementObject
    {
        public string? Name { get; set; }
        public string? Code { get; set; }
        public List<BuildupPart> BuildupParts { get; set; } = new List<BuildupPart>();
        public List<DetailPart> DetailParts { get; set; } = new List<DetailPart>();
        public ElementType ElementType { get; set; }
    }

    public class Metadata
    {
        public string? FireRating { get; set; }
        public double? RValue { get; set; }
        public double? AcousticPerformance { get; set; }
        public double? GlobalWarmingPotential { get; set; }
        public List<string> VOC { get; set; }
        public string? Location { get; set; }
        public int? Cost { get; set; }
        public double? BiogenicRating { get; set; }
        public double? Popularity { get; set; }
        public DateTime? DateAdded { get; set; }
    }

    public class SpeckleData
    {
        public string? StreamID { get; set; }
        public string? BaseObjectID { get; set; }
    }

    public class DetailInfo
    {
        public DetailObject Populate()
        {
            // Create BuildupParts for "CLT BEAM"
            List<BuildupPart> cltBeamBuildupParts = new List<BuildupPart>
{
    new BuildupPart
    {
        Index = 1,
        MaterialCategory = MaterialCategory.MineralBuildingProducts,
        MaterialName = "CLT Beam",
        Thickness = 233,
        ElementRole = ElementRole.LoadBearing
    }
};

            // Create BuildupParts for "Lignotrend Slab"
            List<BuildupPart> lignotrendSlabBuildupParts = new List<BuildupPart>
        {
new BuildupPart
{
Index = 1,
MaterialCategory = MaterialCategory.MineralBuildingProducts,
MaterialName = "Gipsom",
Thickness = 10,
ElementRole = ElementRole.InnerFinish
},

new BuildupPart
{
Index = 2,
MaterialCategory = MaterialCategory.MineralBuildingProducts,
MaterialName = "Plaster for Gypsum",
Thickness = 3,
ElementRole = ElementRole.InnerFinish
},

new BuildupPart
{
Index = 3,
MaterialCategory = MaterialCategory.MineralBuildingProducts,
MaterialName = "Gipsom",
Thickness = 3,
ElementRole = ElementRole.InnerFinish
},

new BuildupPart
{
Index = 4,
MaterialCategory = MaterialCategory.InsulationMaterials,
MaterialName = "Insulation",
Thickness = 3,
ElementRole = ElementRole.InnerFinish
},

new BuildupPart
{
Index = 5,
MaterialCategory = MaterialCategory.Wood,
MaterialName = "Wood Laminated",
Thickness = 210,
ElementRole = ElementRole.LoadBearing
},

new BuildupPart
{
Index = 5,
MaterialCategory = MaterialCategory.MineralBuildingProducts,
MaterialName = "Balast",
Thickness = 91,
ElementRole = ElementRole.Insulation
},

new BuildupPart
{
Index = 6,
MaterialCategory = MaterialCategory.Wood,
MaterialName = "Wood panel",
Thickness = 16,
ElementRole = ElementRole.LoadBearing
},

new BuildupPart
{
Index = 7,
MaterialCategory = MaterialCategory.Wood,
MaterialName = "Wood panel",
Thickness = 16,
ElementRole = ElementRole.LoadBearing
},

new BuildupPart
{
Index = 8,
MaterialCategory = MaterialCategory.InsulationMaterials,
MaterialName = "Underlay",
Thickness = 5,
ElementRole = ElementRole.Insulation
},

new BuildupPart
{
Index = 9,
MaterialCategory = MaterialCategory.InsulationMaterials,
MaterialName = "Cemwood",
Thickness = 55,
ElementRole = ElementRole.Insulation
},

new BuildupPart
{
Index = 10,
MaterialCategory = MaterialCategory.InsulationMaterials,
MaterialName = "Cellulose Insulation 2",
Thickness = 20,
ElementRole = ElementRole.Insulation
},

new BuildupPart
{
Index = 11,
MaterialCategory = MaterialCategory.InsulationMaterials,
MaterialName = "Cellulose Insulation 2",
Thickness = 20,
ElementRole = ElementRole.Insulation
},

new BuildupPart
{
Index = 12,
MaterialCategory = MaterialCategory.InsulationMaterials,
MaterialName = "Lithorherm",
Thickness = 45,
ElementRole = ElementRole.Insulation
},

new BuildupPart
{
Index = 12,
MaterialCategory = MaterialCategory.InsulationMaterials,
MaterialName = "Cemwood",
Thickness = 45,
ElementRole = ElementRole.Insulation
},

new BuildupPart
{
Index = 13,
MaterialCategory = MaterialCategory.InsulationMaterials,
MaterialName = "Gulvpap",
Thickness = 1,
ElementRole = ElementRole.Insulation
},

new BuildupPart
{
Index = 14,
MaterialCategory = MaterialCategory.Wood,
MaterialName = "Wood Finish",
Thickness = 46,
ElementRole = ElementRole.InnerFinish
},

new BuildupPart
{
Index = 15,
MaterialCategory = MaterialCategory.Wood,
MaterialName = "Wood Finish",
Thickness = 12,
ElementRole = ElementRole.InnerFinish
}


};

            // Create DetailParts
            List<DetailPart> detailParts = new List<DetailPart>
{
    new DetailPart
    {
        MaterialCategory = MaterialCategory.InsulationMaterials,
        MaterialName = "Sealing",
        Width = 6,
        Height = 23,
        ElementRole = ElementRole.Insulation
    },

    new DetailPart
    {
        MaterialCategory = MaterialCategory.InsulationMaterials,
        MaterialName = "Sealing",
        Width = 24,
        Height = 13,
        ElementRole = ElementRole.Insulation
    },

    new DetailPart
    {
        MaterialCategory = MaterialCategory.InsulationMaterials,
        MaterialName = "Insulation",
        Width = 145,
        Height = 249,
        ElementRole = ElementRole.Insulation
    },

    new DetailPart
    {
        MaterialCategory = MaterialCategory.Wood,
        MaterialName = "Sill",
        Width = 245,
        Height = 145,
        ElementRole = ElementRole.LoadBearing
    },

    new DetailPart
    {
        MaterialCategory = MaterialCategory.Wood,
        MaterialName = "Sill Stopper",
        Width = 45,
        Height = 45,
        ElementRole = ElementRole.LoadBearing
    },

    new DetailPart
    {
        MaterialCategory = MaterialCategory.InsulationMaterials,
        MaterialName = "Sill Insulation",
        Width = 245,
        Height = 20,
        ElementRole = ElementRole.Insulation
    },

    new DetailPart
    {
        MaterialCategory = MaterialCategory.InsulationMaterials,
        MaterialName = "Sill Seal",
        Width = 70,
        Height = 20,
        ElementRole = ElementRole.Insulation
    },

    new DetailPart
    {
        MaterialCategory = MaterialCategory.InsulationMaterials,
        MaterialName = "Sill Insulation",
        Width = 245,
        Height = 10,
        ElementRole = ElementRole.Insulation
    },

    new DetailPart
    {
        MaterialCategory = MaterialCategory.InsulationMaterials,
        MaterialName = "Sill Insulation",
        Width = 245,
        Height = 10,
        ElementRole = ElementRole.Insulation
    },

    new DetailPart
    {
        MaterialCategory = MaterialCategory.Wood,
        MaterialName = "Sill",
        Width = 245,
        Height = 45,
        ElementRole = ElementRole.LoadBearing
    },

    new DetailPart
    {
        MaterialCategory = MaterialCategory.InsulationMaterials,
        MaterialName = "Upper Insulation",
        Width = 115,
        Height = 107,
        ElementRole = ElementRole.Insulation
    },

    new DetailPart
    {
        MaterialCategory = MaterialCategory.Wood,
        MaterialName = "Upper Sill Bottom",
        Width = 90,
        Height = 45,
        ElementRole = ElementRole.LoadBearing
    },

    new DetailPart
    {
        MaterialCategory = MaterialCategory.Wood,
        MaterialName = "Upper Sill Top",
        Width = 90,
        Height = 45,
        ElementRole = ElementRole.LoadBearing
    },

};

            // Create Elements
            List<ElementObject> elements = new List<ElementObject>
{
    new ElementObject
    {
        Name = "CLT BEAM",
        Code = "UZ01",
        ElementType = ElementType.Beam,
        BuildupParts = cltBeamBuildupParts
    },
    new ElementObject
    {
        Name = "Lignotrend Slab",
        Code = "SL01",
        ElementType = ElementType.Slab,
        BuildupParts = lignotrendSlabBuildupParts
    },
};

            // Create Metadata
            Metadata metadata = new Metadata
            {
                FireRating = "Class B",
                RValue = 1.71,
                AcousticPerformance = 0.5,
                GlobalWarmingPotential = 50,
                VOC = new List<string> { "VOC1", "VOC2" },
                Location = "Finland",
                Cost = 1,
                BiogenicRating = 0.99,
                Popularity = 100,
                DateAdded = DateTime.Now
            };

            // Create DetailObject with all the information
            DetailObject detail = new DetailObject
            {
                Keyimage = "",
                Name = "",
                Description = "Nice detail",
                TopologyCategory = DetailTopologyCategory.Linear,
                Elements = elements,
                DetailPart = detailParts,
                Metadata = metadata,
            };

            return detail;
        }

    }

}
