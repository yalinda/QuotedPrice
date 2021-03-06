﻿<%@ WebHandler Language="C#" Class="fileupload" %>

using System;
using System.Web;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using IhmedIvfBackend.WebLibrary;
using System.IO;

public class fileupload : IHttpHandler {

    protected IhmedIvfBackend.Models.DTO.UserInfo userInfo = new IhmedIvfBackend.Models.DTO.UserInfo();

    public void ProcessRequest (HttpContext context) {

        if (HttpContext.Current.User.Identity.IsAuthenticated && userInfo != null)
        {
            //HttpPostedFile uploads = context.Request.Files["upload"];
            //Regex regexCode = new Regex(@".*\.(jpg|jpeg|png|gif|bmp)");

            //if (regexCode.IsMatch(uploads.FileName.ToLower()))
            //{
            //    DateTime dt = DateTime.Now;
            //    string CKEditorFuncNum = context.Request["CKEditorFuncNum"];
            //    string file = System.IO.Path.GetFileName(uploads.FileName);
            //    string fileExtension = Path.GetExtension(file).ToLower();
            //    var filename = dt.Ticks + fileExtension;
            //    uploads.SaveAs(context.Server.MapPath(CommonParam.EditorUploadPath) + filename);

            //    //string url = AlikuWebUtilityLibrary.Utility.CommonLibrary.ResolveUrl_New(CommonParam.CKEditorUploadPath) + t;
            //    string url = AlikuWebUtilityLibrary.Utility.CommonLibrary.ResolveUrl(CommonParam.EditorUploadPath) + filename;
            //    context.Response.Write("<script>window.parent.CKEDITOR.tools.callFunction(" + CKEditorFuncNum + ", \"" + url + "\");</script>");
            //    context.Response.End();
            //}

            HttpPostedFileBase upload = new HttpPostedFileWrapper(context.Request.Files["upload"]);
            List<HttpPostedFileBase> files = new List<HttpPostedFileBase>();
            files.Add(upload);

            string result = Utility.CheckUploadFile(files, 
                new List<string>() { ".jpg", ".jpeg", ".png", ".bmp" }, 
                (int)CommonParam.CommonUploadLength);

            if (string.IsNullOrWhiteSpace(result))
            {
                DateTime dt = DateTime.Now;
                string CKEditorFuncNum = context.Request["CKEditorFuncNum"];
                string file = Path.GetFileName(upload.FileName);
                string fileExtension = Path.GetExtension(file).ToLower();
                var filename = dt.Ticks + fileExtension;
                upload.SaveAs(context.Server.MapPath(CommonParam.EditorUploadPath) + filename);

                //string url = AlikuWebUtilityLibrary.Utility.CommonLibrary.ResolveUrl_New(CommonParam.CKEditorUploadPath) + t;
                string url = AlikuWebUtilityLibrary.Utility.CommonLibrary.ResolveUrl(CommonParam.EditorUploadPath) + filename;
                context.Response.Write("<script>window.parent.CKEDITOR.tools.callFunction(" + CKEditorFuncNum + ", \"" + url + "\");</script>");
                context.Response.End();
            }
            else
            {
                context.Response.Write("<script>alert('"+result+"\\n請關掉上傳視窗再重新上傳');</script>");
                context.Response.End();
            }
        }
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}