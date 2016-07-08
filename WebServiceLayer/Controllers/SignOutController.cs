using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using WebServiceLayer;

namespace WebApplication2.Controllers
{
    public class SignOutController : ApiController
    {
        private ApplicationUserManager _userManager;
        private ApplicationSignInManager _signInManager;


        public async Task<HttpResponseMessage> Post()
        {
            
                HttpContext.Current.GetOwinContext().Authentication.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
                //SignInManager.SignIn(applicationUser, true, true);
                return Request.CreateResponse(HttpStatusCode.OK, "Success");
          

        }
    }
}
