using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;


namespace WebServiceLayer.Models
{
    public class DriverLocation
    {
        [Key]
        public string UserId { get; set; }
        public string DriverName { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }
    }
}