using MongoDB.Bson;
using MongoDB.Driver;
using OpenDetailAPI.Models;

namespace OpenDetailAPI.Services
{
    public class DetailsService
    {
        #region Properties

        private readonly IMongoCollection<DetailObject> _detailsCollection;

        #endregion

        #region Constructors

        /// <summary>
        /// Main constructor
        /// </summary>
        /// <param name="database"></param>
        public DetailsService(IMongoDatabase database)
        {
            _detailsCollection = database.GetCollection<DetailObject>("details");
        }

        #endregion

        #region Methods

        public async Task CreateAsync(DetailObject detail)
        {
            await _detailsCollection.InsertOneAsync(detail);
            return;
        }

        public async Task<List<DetailObject>> GetAsync()
        {
            //return await _detailsCollection.Find(new BsonDocument()).ToListAsync();
            List<DetailObject> documents = await _detailsCollection.Find(_ => true).ToListAsync();
            return documents;
        }

        #endregion
    }
}
