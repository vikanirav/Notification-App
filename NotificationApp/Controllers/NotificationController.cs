using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NotificationApp.Models;
using System.Collections.Generic;
using System.IO;

namespace NotificationApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //This is a notification controller.
    public class NotificationController : ControllerBase
    {
        /// <summary>
        /// It is used to get all notification by file number.
        /// </summary>
        /// <param name="number">it is a file number</param>
        /// <returns>it will return list of notifications.</returns>
        [HttpGet("filenumber/{number}")]
        public IActionResult Get(int number)
        {
            string fileName = $"invitations{number}";
            string file = Path.Combine(Directory.GetCurrentDirectory(), $"wwwroot\\NotificationFiles\\{fileName}.json");
            string invitationsJsonString = System.IO.File.ReadAllText(file);
            InvitationList invitations = JsonConvert.DeserializeObject<InvitationList>(invitationsJsonString);
            return Ok(invitations.Invites);
        }
    }
}