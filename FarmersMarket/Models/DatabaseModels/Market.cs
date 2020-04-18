using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FarmersMarket.Models.DatabaseModels
{
    public class Market
    {
        public int Id { get; set; }
        public string MarketNumber { get; set; }
        public string Name { get; set; }
        public bool IsFavorite { get; set; }
        public string Address { get; set; }
        public string GoogleAddress { get; set; }
        public string Products { get; set; }
        public string Schedule { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}
