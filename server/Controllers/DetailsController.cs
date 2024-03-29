﻿using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
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

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] DetailObject model)
        {
            model.Id = ObjectId.GenerateNewId();
            await _DBService.CreateAsync(model);
            return CreatedAtAction(nameof(Get), new { id = model.Id }, model); //Sends the HTTP response code (e.g. 201) and the object
        }

        [HttpGet]
        public async Task<List<DetailObject>> Get()
        {
            List<DetailObject> models = await _DBService.GetAsync();
            return models;
        }

        #endregion
    }
}
