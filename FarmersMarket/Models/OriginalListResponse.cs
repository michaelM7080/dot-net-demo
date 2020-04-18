using System;
using System.Collections.Generic;

namespace FarmersMarket.Models
{
    public class OriginalListResponse
    {
        public List<Result> results { get; set; }
    }

    public class Result
    {
        public string id { get; set; }
        public string marketname { get; set; }
    }
}
