namespace WebServiceLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddDriverName_DriverLocation : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.DriverLocations", "DriverName", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.DriverLocations", "DriverName");
        }
    }
}
