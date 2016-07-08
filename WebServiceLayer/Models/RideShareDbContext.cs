using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebServiceLayer.Models
{
    public class RideShareDbContext : DbContext
    {
        public RideShareDbContext(): base("name=DefaultConnection")
        {
            Database.SetInitializer(new MySqlInitializer());
        }
        public DbSet<DriverLocation> DriverLocations { get; set; }
    }

   
}