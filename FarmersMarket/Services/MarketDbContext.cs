using FarmersMarket.Models.DatabaseModels;
using Microsoft.EntityFrameworkCore;

namespace FarmersMarket.Services
{
    public class MarketDbContext : DbContext
    {

        public DbSet<Market> Markets { get; set; }
        public DbSet<Request> Request { get; set; }
        public DbSet<RequestType> RequestTypes { get; set; }

        public MarketDbContext(DbContextOptions<MarketDbContext> options): base(options)
        {
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer(@"Data Source=tcp:farmersmarketserver.database.windows.net,1433;Initial Catalog=farmersMarketDB;Persist Security Info=False;User ID=makickal484456;Password=!Major7080;MultipleActiveResultSets=False;Connect Timeout=30;Encrypt=True;TrustServerCertificate=False");
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RequestType>()
                .HasData(
                    new RequestType
                    {
                        Id = 1,
                        Name = "ByZip",
                        Description = "Search by Zip Code"
                    },
                    new RequestType
                    {
                        Id = 2,
                        Name = "ByLocation",
                        Description = "Search using Lat and Lon"
                    },
                    new RequestType
                    {
                        Id = 3,
                        Name = "GetDetail",
                        Description = "Pulling details on a location."
                    }
                );
        }
    }
}
