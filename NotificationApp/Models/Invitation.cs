using Newtonsoft.Json;

namespace NotificationApp.Models
{
    public class Invitation
    {
        [JsonProperty("invite_id")]
        public int InviteId { get; set; }

        [JsonProperty("sender_id")]
        public string SenderId { get; set; }

        [JsonProperty("sig_id")]
        public int SigId { get; set; }

        [JsonProperty("invite")]
        public string Invite { get; set; }

        [JsonProperty("vector")]
        public string Vector { get; set; }

        [JsonProperty("invite_time")]
        public int InviteTime { get; set; }

        [JsonProperty("user_id")]
        public string UserId { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }
    }
}