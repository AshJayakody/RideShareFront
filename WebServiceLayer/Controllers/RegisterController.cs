using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using WebServiceLayer.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using System.Net;
using WebServiceLayer.Enums;

namespace WebServiceLayer.Controllers
{
    public class RegisterController : ApiController
    {
        private ApplicationUserManager _userManager;

        public async Task<HttpResponseMessage> Post(RegisterUserModel model)
       
        {
            //
            var user = new ApplicationUser { UserName = model.UserName, Email = model.Email  };
            var result = await UserManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                //create claims
                user.Claims.Add(new Microsoft.AspNet.Identity.EntityFramework.IdentityUserClaim() { ClaimType = UserClaims.FirstName.ToString(), ClaimValue = model.FirstName });
                user.Claims.Add(new Microsoft.AspNet.Identity.EntityFramework.IdentityUserClaim() { ClaimType = UserClaims.LastName.ToString(), ClaimValue = model.LastName });

                UserManager.Update(user);
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
