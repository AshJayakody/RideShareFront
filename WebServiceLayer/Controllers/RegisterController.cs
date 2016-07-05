using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using WebServiceLayer.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using System.Net;

namespace WebServiceLayer.Controllers
{
    public class RegisterController : ApiController
    {
        private ApplicationUserManager _userManager;

        public async Task<HttpResponseMessage> Post([FromBody]RegisterUserModel model)
       
        {
            var user = new ApplicationUser { UserName = model.UserName, Email = model.Email  };
            var result = await UserManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                return Request.CreateResponse(HttpStatusCode.OK, "Success");
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, result.Errors);
            }
        }

        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }
    }
}
