using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FarmersMarket.Models
{
    public class DetailResponse
    {
        public string Address { get; set; }
        public string GoogleAddressUrl { get; set; }
        public string[] Products { get; set; }
        public string[] Schedule { get; set; }
    }
}
