﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebServiceLayer.Models
{
    public class RegisterUserModel
    {

        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}