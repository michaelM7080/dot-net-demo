using FarmersMarket.Models.DatabaseModels;
using FarmersMarket.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FarmersMarket.Services
{
    public class DatabaseService : IDatabaseService
    {
        private readonly MarketDbContext db;

        public DatabaseService(MarketDbContext context)
        {
            db = context;
        }

        #region Market CRUD Operations
        //Takes list of Markets and adds them to database
        //Returns number of entries added
        public async Task<List<Market>> AddUpdateMarketsToDatabase(List<Market> markets)
        {
            markets.ForEach(async item =>
            {
                Market market = db.Markets.Where(a => a.MarketNumber == item.MarketNumber).FirstOrDefault();
                if (market == null)
                {
                    item.CreatedDate = market.UpdatedDate = DateTime.UtcNow;
                    await db.Markets.AddAsync(item);
                }
                else
                {
                    item.CreatedDate = market.CreatedDate;
                    item.UpdatedDate = DateTime.UtcNow;
                    item.IsFavorite = market.IsFavorite;
                    db.Markets.Update(item);
                }
            });
            return markets;
        }

        public async Task<Market> AddUpdateMarketToDatabase(Market market)
        {
            Market databaseMarket = db.Markets.Where(a => a.MarketNumber == market.MarketNumber).FirstOrDefault();
            if (databaseMarket == null)
            {
                market.CreatedDate = market.UpdatedDate = DateTime.UtcNow;
                await db.Markets.AddAsync(market);
            }
            else
            {
                market.CreatedDate = databaseMarket.CreatedDate;
                market.UpdatedDate = DateTime.UtcNow;
                market.IsFavorite = databaseMarket.IsFavorite;
                db.Markets.Update(market);
            }
           
            return market;
        }

        public async Task<bool> FlipFavoriteStatus(string marketId)
        {
            Market databaseMarket = db.Markets.Where(a => a.MarketNumber == marketId).FirstOrDefault();

            if(databaseMarket != null)
            {
                databaseMarket.IsFavorite = !databaseMarket.IsFavorite;
                db.Markets.Update(databaseMarket);
                await db.SaveChangesAsync();

                return databaseMarket.IsFavorite;
            }

            return false;
        }

        public async Task<Market> GetMarketDetailsById(int id)
        {
            return await db.Markets.FindAsync(id);
        }

        public async Task<int> SaveChanges()
        {
            return await db.SaveChangesAsync();
        }

        public async Task<bool> ClearMarketTable()
        {
            var entries = db.Markets.ToList();
            db.Markets.RemoveRange(entries);
            await db.SaveChangesAsync();
            return true;
        }

        #endregion

        #region Request CRUD Operations

        public async Task<int> RecordRequest(Request request)
        {
            db.Request.Add(request);
            return await db.SaveChangesAsync();
        }

        #endregion


    }
}
