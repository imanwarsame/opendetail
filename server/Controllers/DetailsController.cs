using Microsoft.AspNetCore.Mvc;
using OpenDetailAPI.Models;
using OpenDetailAPI.Services;

namespace OpenDetailAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DetailsController: ControllerBase
    {
        #region Properties

        /// <summary>
        /// Singleton service
        /// </summary>
        private readonly DetailsService _DBService;

        #endregion

        #region Constructors

        /// <summary>
        /// Main constructor
        /// </summary>
        /// <param name="mongoDBService"></param>
        public DetailsController(DetailsService mongoDBService)
        {
            _DBService = mongoDBService;
        }

        #endregion

        #region Methods

        [HttpGet]
        public async Task<List<DetailsModel>> Get()
        {
            List<DetailsModel> models = await _DBService.GetAsync();
            return models;
        }

        #endregion
    }
}
