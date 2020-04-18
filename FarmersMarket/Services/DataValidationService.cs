using FarmersMarket.Models;
using FarmersMarket.Services.Interfaces;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace FarmersMarket.Services
{
    public class DataValidationService : IDataValidationService
    {
        static HttpClient http = new HttpClient();
        //private DatabaserService dbService { get; set; }
        private IDatabaseService dbService { get; }
        private readonly string baseUrl = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc";

        public DataValidationService(IDatabaseService databaseService)
        {
            dbService = databaseService ?? throw new ArgumentNullException(nameof(databaseService));
        }

        #region Get Original Data

        private async Task<OriginalListResponse> GetOriginalList(OriginalListRequest request)
        {
            string path = baseUrl;
            OriginalListResponse response = null;
            int requestType = 0;
            string rawJsonResponse = null;

            if (request.Zip != null)
            {
                //search by zip
                path += $"/zipSearch?zip={request.Zip}";
                requestType = (int)RequestTypeEnum.ByZip;
            }
            else if(request.Lat != null && request.Lon != null)
            {
                //search by location
                path += $"/locSearch?lat={request.Lat}&lng={request.Lon}";
                requestType = (int)RequestTypeEnum.ByLocation;
            }
            else
            {
                //bad Request
                return null;
            }

            HttpResponseMessage httpResponse = await http.GetAsync(path);

            if(httpResponse.IsSuccessStatusCode)
            {
                rawJsonResponse = await httpResponse.Content.ReadAsStringAsync();
                response = JsonConvert.DeserializeObject<OriginalListResponse>(rawJsonResponse);

                //save request to database
                await dbService.RecordRequest(new Models.DatabaseModels.Request()
                {
                    RequestType = requestType,
                    RequestZip = request.Zip,
                    RequestLat = request.Lat,
                    RequestLon = request.Lon,
                    Response = rawJsonResponse,
                    CreatedDate = new DateTime()
                });
            }
            
            return response;
        }

        private async Task<OriginalDetailResponse> GetOriginalDetails(OriginalDetailRequest request) 
        {
            string path = baseUrl;
            OriginalDetailResponse response = null;
            int requestType = (int)RequestTypeEnum.GetDetails;
            string rawJsonResponse = null;

            if (request.MarketId != null)
            {
                //pull details of Market
                path += $"/mktDetail?id={request.MarketId}";
            }
            else
            {
                //Bad Request
                return null;
            }

            HttpResponseMessage httpResponse = await http.GetAsync(path);

            if (httpResponse.IsSuccessStatusCode)
            {
                rawJsonResponse = await httpResponse.Content.ReadAsStringAsync();
                response = JsonConvert.DeserializeObject<OriginalDetailResponse>(rawJsonResponse);

                //save request to database
                await dbService.RecordRequest(new Models.DatabaseModels.Request()
                {
                    RequestType = requestType,
                    RequestMarketId = request.MarketId,
                    Response = rawJsonResponse,
                    CreatedDate = new DateTime()
                });
            }

            return response;
        }

        #endregion

        #region Convert Original Data to New Models

        public async Task<ListResponse> GetValidatedMarketList(OriginalListRequest request)
        {
            OriginalListResponse originalListResponse = await GetOriginalList(request);
            ListResponse listResponse = new ListResponse();
            List<Models.DatabaseModels.Market> databaseMarkets = new List<Models.DatabaseModels.Market>();
            listResponse.Response = new List<Market>();

            if(originalListResponse != null)
            {
                originalListResponse.results.ForEach(async item =>
                {
                    int decimalIndex = item.marketname.IndexOf(".", 0, 5);
                    string name = item.marketname.Substring(decimalIndex + 3);
                    string distance = item.marketname.Substring(0, decimalIndex + 2);

                    Models.DatabaseModels.Market databaseMarket = new Models.DatabaseModels.Market
                    {
                        MarketNumber = item.id,
                        Name = name, 
                        IsFavorite = false
                    };

                    databaseMarkets.Add(databaseMarket);

                    databaseMarket = await dbService.AddUpdateMarketToDatabase(databaseMarket);

                    listResponse.Response.Add(new Market
                    {
                        MarketNumber = item.id,
                        Name = name,
                        Distance = distance,
                        IsFavorite = databaseMarket.IsFavorite
                    });
                });

                await dbService.SaveChanges();

                //databaseMarkets = await dbService.AddUpdateMarketsToDatabase(databaseMarkets);

                return listResponse;
            }
            return null;
        }

        public async Task<DetailResponse> GetValidatedMarketDetail(OriginalDetailRequest request)
        {
            OriginalDetailResponse originalDetailResponse = await GetOriginalDetails(request);

            originalDetailResponse.marketDetails.Schedule = originalDetailResponse.marketDetails.Schedule.Replace("<br>", "").Trim();

            if(originalDetailResponse.marketDetails.Products == "")
            {
                originalDetailResponse.marketDetails.Products = null;
            }

            if(originalDetailResponse.marketDetails.Schedule == "")
            {
                originalDetailResponse.marketDetails.Schedule = null;
            }
            else
            {
                originalDetailResponse.marketDetails.Schedule = originalDetailResponse.marketDetails.Schedule.Substring(25);
            }

            Models.DatabaseModels.Market databaseMarket = new Models.DatabaseModels.Market
            {
                MarketNumber = request.MarketId,
                Address = originalDetailResponse.marketDetails.Address,
                GoogleAddress = originalDetailResponse.marketDetails.GoogleLink,
                Products = originalDetailResponse.marketDetails.Products,
                Schedule = originalDetailResponse.marketDetails.Schedule
            };

            databaseMarket = await dbService.AddUpdateMarketToDatabase(databaseMarket);

            await dbService.SaveChanges();

            var item = new DetailResponse
            {
                Address = databaseMarket.Address,
                GoogleAddressUrl = databaseMarket.GoogleAddress
            };

            if(databaseMarket.Products != null)
            {
                item.Products = databaseMarket.Products.Split("; ");
            }

            if(databaseMarket.Schedule != null)
            {
                item.Schedule = databaseMarket.Schedule.Split(";");
            }

            return item;
        }

        public async Task<bool> FlipFavoriteStatus(string marketId)
        {
            return await dbService.FlipFavoriteStatus(marketId);
        }

        #endregion

        #region Database Management

        public void ClearMarketTable()
        {
            dbService.ClearMarketTable();
        }

        #endregion
    }
}
