<%@ WebHandler Language="C#" Class="ValidateCode" %>

using System;
using System.Web;
using AlikuWebUtilityLibrary.Image;

public class ValidateCode : IHttpHandler {

    public void ProcessRequest(HttpContext context)
    {
        if (context.Request.QueryString["cookie"] != null)
        {
            string cookieName = context.Request.QueryString["cookie"].ToString();
            int strRnd = cookieName.IndexOf(Convert.ToChar("?"));
            if (strRnd > 0) cookieName = cookieName.Substring(0, cookieName.IndexOf(Convert.ToChar("?")));

            //將驗證碼存入cookie
            Captcha captcha = new Captcha();
            HttpCookie cookie = context.Request.Cookies[cookieName];
            if (cookie == null) cookie = new HttpCookie(cookieName);
            cookie.Value = captcha.GenerateImageValidateCode(4, 100, 50, System.Drawing.Color.Green, System.Drawing.Brushes.White);
            cookie.HttpOnly = true;
            context.Response.AppendCookie(cookie);
        }
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}