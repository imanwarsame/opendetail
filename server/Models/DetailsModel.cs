using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace OpenDetailAPI.Models
{
    /// <summary>
    /// Model represting template for a detail
    /// </summary>
    public class DetailsModel
    {
        #region Properties

        /// <summary>
        /// Mongo unique ID
        /// </summary>
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        /// <summary>
        /// Speckle URL
        /// </summary>
        public string Name { get; set; } = null!;

        /// <summary>
        /// Speckle URL
        /// </summary>
        public string URL { get; set; } = null!;

        /// <summary>
        /// Speckle URL
        /// </summary>
        public string Category { get; set; } = null!;

        /// <summary>
        /// Speckle URL
        /// </summary>
        public string Author { get; set; } = null!;

        /// <summary>
        /// Metadata
        /// </summary>
        [BsonExtraElements]
        public Dictionary<string, object> Metadata { get; set; } = new Dictionary<string, object>();

        #endregion
    }
}
