using System;
using System.IO;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PerftEvaluation.DTO;

namespace PerftEvaluation.Api.Controllers.Masters {
    [Route ("api/[controller]")]
    [ApiController]
    /// <summary>
    /// Upload file Controller
    /// </summary>
    public class UploadController : ControllerBase {
        #region Declaration
        private ResponseModel responseModel = null;
        private readonly IHostingEnvironment _hostingEnvironment;
        protected readonly ILogger<UploadController> _logger;

        public UploadController (IHostingEnvironment hostingEnvironment, ILogger<UploadController> logger = null) {
            this.responseModel = new ResponseModel ();
            if (null != logger) {
                this._logger = logger;
            }
            this._hostingEnvironment = hostingEnvironment;
        }
        #endregion

        #region Class Methods
        [HttpPost, DisableRequestSizeLimit]
        public IActionResult UploadFile (RequestModel requestModel) {
            try {
                var file = Request.Form.Files[0];
                string folderName = "Upload";
                string webRootPath = _hostingEnvironment.WebRootPath;
                string newPath = Path.Combine (webRootPath, folderName);
                if (!Directory.Exists (newPath)) {
                    Directory.CreateDirectory (newPath);
                }
                if (file.Length > 0) {
                    string fileName = ContentDispositionHeaderValue.Parse (file.ContentDisposition).FileName.Trim ('"');
                    string fullPath = Path.Combine (newPath, fileName);
                    using (var stream = new FileStream (fullPath, FileMode.Create)) {
                        file.CopyTo (stream);
                    }
                }
                return Ok ("Upload Successful.");
            } catch (System.Exception ex) {
                return BadRequest ("Upload Failed: " + ex.Message);
            }
        }
        #endregion
    }
}