using FarmersMarket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FarmersMarket.Services.Interfaces
{
    public interface IDataValidationService
    {
        Task<ListResponse> GetValidatedMarketList(OriginalListRequest request);

        Task<DetailResponse> GetValidatedMarketDetail(OriginalDetailRequest request);

        Task<bool> FlipFavoriteStatus(string marketId);

        void ClearMarketTable();
    }
}
