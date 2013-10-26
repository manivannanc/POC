using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ProfileAPI.Models
{
    public class ProfileContext : DbContext
    {
        public ProfileContext()
            : base("name=ProfileConnection")
        {
        }
        public DbSet<Profile> Profiles { get; set; }
    }
}