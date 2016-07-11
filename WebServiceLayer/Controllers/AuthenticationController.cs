using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using WebServiceLayer.Models;
using Microsoft.AspNet.Identity.Owin;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using System;

namespace WebServiceLayer.Controllers

{
    public class AuthenticationController : ApiController
    {
        private ApplicationUserManager _userManager;
        private ApplicationSignInManager _signInManager;


        public async Task<HttpResponseMessage> Post(LoginModel loginModel)
        {
          
            
                var user = await UserManager.FindAsync(loginModel.UserName, loginModel.Password);
                if (user != null)
                {
                    var identity= await UserManager.CreateIdentityAsync(user, DefaultAuthenticationTypes.ApplicationCookie);
                    HttpContext.Current.GetOwinContext().Authentication.SignIn(identity);
                    SignInManager.SignIn(user, true, true);
                    return Request.CreateResponse(HttpStatusCode.OK, "Success");
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.Unauthorized, "Invalid user credential");
                }
            
           

            //var applicationUser = await UserManager.FindAsync(loginModel.UserName, loginModel.Password);
            //if (applicationUser != null)
            //{
            //    var identity = await UserManager.CreateIdentityAsync(applicationUser, DefaultAuthenticationTypes.ApplicationCookie);
            //    HttpContext.Current.GetOwinContext().Authentication.SignIn(identity);
            //    //SignInManager.SignIn(applicationUser, true, true);
            //    return Request.CreateResponse(HttpStatusCode.OK, "Success");
            //}
            //else
            //{
            //    return Request.CreateResponse(HttpStatusCode.Unauthorized, "Invalid user credential");
            //}

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

        public ApplicationSignInManager SignInManager
        {
            get
            {
                return _signInManager ?? HttpContext.Current.GetOwinContext().Get<ApplicationSignInManager>();
            }
            private set
            {
                _signInManager = value;
            }
        }
    }
}
