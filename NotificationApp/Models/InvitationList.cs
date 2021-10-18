using Newtonsoft.Json;
using System.Collections.Generic;

namespace NotificationApp.Models
{
    public class InvitationList
    {
        [JsonProperty("invites")]
        public List<Invitation> Invites { get; set; }
    }
}