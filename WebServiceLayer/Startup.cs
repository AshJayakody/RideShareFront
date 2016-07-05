using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebServiceLayer.Startup))]
namespace WebServiceLayer
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
