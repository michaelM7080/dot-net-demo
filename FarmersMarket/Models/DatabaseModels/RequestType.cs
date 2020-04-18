using System.Collections.Generic;

namespace FarmersMarket.Models.DatabaseModels
{
    public class RequestType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<Request> Requests { get; set; }
    }
}
