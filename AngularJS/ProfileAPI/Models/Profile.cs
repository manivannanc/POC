using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace ProfileAPI.Models
{
    /// <summary>
    /// Summary description for Profile
    /// </summary>
    public class Profile
    {   
        [Key]
        public int ProfileID { get; set; }       
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email {get;set;}
        public string Mobile {get;set;}          
        
    }
}