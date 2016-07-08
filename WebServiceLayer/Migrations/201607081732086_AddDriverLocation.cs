namespace WebServiceLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddDriverLocation : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.DriverLocations",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        Latitude = c.Single(nullable: false),
                        Longitude = c.Single(nullable: false),
                    })
                .PrimaryKey(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.DriverLocations");
        }
    }
}
