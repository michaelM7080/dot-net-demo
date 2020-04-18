using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FarmersMarket.Services;
using FarmersMarket.Services.Interfaces;
using FarmersMarket.Models;

namespace FarmersMarket.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class MarketController : ControllerBase
    {
        private IDataValidationService dataService { get; }

        public MarketController(IDataValidationService service)
        {
            dataService = service ?? throw new ArgumentNullException(nameof(service));
        }

        [HttpGet]
        public string Get()
        {
            return "Welcome to the Farmer's Market API";
        }

        [HttpGet("zip/{zip}")]
        public async Task<ActionResult<ListResponse>> GetListByZipAsync(string zip)
        {
            //Used to clear table
            //if(zip == "00000")
            //{
            //    dataService.ClearMarketTable();
            //    return null;
            //}

            return await dataService.GetValidatedMarketList(new OriginalListRequest
            {
                Zip = zip
            });
        }

        [HttpGet("location")]
        public async Task<ActionResult<ListResponse>> GetListByLocationAsync([FromQuery]string lat, [FromQuery]string lon)
        {
            return await dataService.GetValidatedMarketList(new OriginalListRequest
            {
                Lat = lat,
                Lon = lon
            });
        }

        [HttpGet("details/{marketNumber}")]
        public async Task<ActionResult<DetailResponse>> GetDetailsAsync(string marketNumber)
        {
            return await dataService.GetValidatedMarketDetail(new OriginalDetailRequest
            {
                MarketId = marketNumber
            });
        }

        [HttpGet("favorite/{marketId}")]
        public async Task<ActionResult<bool>> FlipFavoriteStatusById(string marketId)
        {
            return await dataService.FlipFavoriteStatus(marketId);
        }
    }
}
