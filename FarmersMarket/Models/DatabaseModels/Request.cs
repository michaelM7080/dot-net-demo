using System;

namespace FarmersMarket.Models.DatabaseModels
{
    public class Request
    {
        public int Id { get; set; }
        public string RequestZip { get; set; }
        public string RequestLat { get; set; }
        public string RequestLon { get; set; }
        public string RequestMarketId { get; set; }
        public string Response { get; set; }
        public DateTime CreatedDate { get; set; }

        public int RequestType { get; set; }
        public RequestType Type { get; set; }
    }
}
