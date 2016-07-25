namespace WebServiceLayer.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using WebServiceLayer.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<WebServiceLayer.Models.RideShareDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            SetSqlGenerator("MySql.Data.MySqlClient", new MySql.Data.Entity.MySqlMigrationSqlGenerator());
        }

        protected override void Seed(WebServiceLayer.Models.RideShareDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            context.DriverLocations.AddOrUpdate(x => x.UserId,
                 new DriverLocation() { UserId = "e3f21317 - 3fc3 - 4d5d - af39 - 9584e7552b59", Latitude = 6.939469F , Longitude = 79.878408F , DriverName = "Ashan" },
                 new DriverLocation() { UserId = "0d71208f-b293-497a-8d72-a3772936393b", Latitude = 6.943262F, Longitude = 79.878600F, DriverName = "Hashan" }
                );
        }
    }
}
