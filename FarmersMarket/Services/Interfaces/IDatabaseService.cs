using FarmersMarket.Models.DatabaseModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FarmersMarket.Services.Interfaces
{
    public interface IDatabaseService
    {
        Task<List<Market>> AddUpdateMarketsToDatabase(List<Market> markets);

        Task<Market> AddUpdateMarketToDatabase(Market market);

        Task<Market> GetMarketDetailsById(int id);

        Task<int> RecordRequest(Request request);

        Task<int> SaveChanges();

        Task<bool> FlipFavoriteStatus(string marketId);

        Task<bool> ClearMarketTable();
    }
}
