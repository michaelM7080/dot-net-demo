using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FarmersMarket.Models
{
    public class OriginalListRequest
    {
        public string Zip { get; set; }
        public string Lat { get; set; }
        public string Lon { get; set; }
    }
}
