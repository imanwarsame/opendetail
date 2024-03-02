using MongoDB.Driver;

namespace OpenDetailAPI.Services
{
    public class DBService
    {
        #region Properties

        /// <summary>
        /// Mongo client
        /// </summary>
        private readonly MongoClient _client;

        #endregion

        #region Constructors

        /// <summary>
        /// Main constructor
        /// </summary>
        /// <param name="configuration"></param>
        public DBService()
        {
            _client = new MongoClient("mongodb+srv://aecuser:aechack2024@opendetailcluster.qgxprtm.mongodb.net/?retryWrites=true&w=majority&appName=OpenDetailCluster");
        }

        #endregion

        #region Methods

        /// <summary>
        /// Get specified database
        /// </summary>
        /// <param name="databaseName"></param>
        /// <returns></returns>
        public IMongoDatabase GetDatabase(string databaseName = "opendetail")
        {
            return _client.GetDatabase(databaseName);
        }

        #endregion
    }
}
