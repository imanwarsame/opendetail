using MongoDB.Bson;
using MongoDB.Driver;
using OpenDetailAPI.Models;

namespace OpenDetailAPI.Services
{
    public class DetailsService
    {
        #region Properties

        private readonly IMongoCollection<DetailsModel> _detailsCollection;

        #endregion

        #region Constructors

        /// <summary>
        /// Main constructor
        /// </summary>
        /// <param name="database"></param>
        public DetailsService(IMongoDatabase database)
        {
            _detailsCollection = database.GetCollection<DetailsModel>("details");
        }

        #endregion

        #region Methods

        public async Task CreateAsync(DetailsModel detail)
        {
            await _detailsCollection.InsertOneAsync(detail);
            return;
        }

        public async Task<List<DetailsModel>> GetAsync()
        {
            //return await _detailsCollection.Find(new BsonDocument()).ToListAsync();
            List<DetailsModel> documents = await _detailsCollection.Find(_ => true).ToListAsync();
            return documents;
        }

        #endregion
    }
}
