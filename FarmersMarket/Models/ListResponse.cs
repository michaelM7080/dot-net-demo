using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FarmersMarket.Models
{
    public class ListResponse
    {
        public List<Market> Response { get; set; }
    }

    public class Market
    {
        public string MarketNumber { get; set; }
        public string Name { get; set; }
        public string Distance { get; set; }
        public bool IsFavorite { get; set; }
    }
}
