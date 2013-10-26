using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProfileAPI.Models;
namespace ProfileAPI.Controllers
{
    public class ProfileController : ApiController
    {
        private ProfileContext db = new ProfileContext();
        // GET api/<controller>
        [HttpGet]
        public List<Profile> Get()
        {          
            var list=db.Profiles .ToList();
            return list;
        }
        

        // GET api/<controller>/5
        [HttpGet]
        public Profile Get(int id)
        {

            Profile profile= (from p in db.Profiles
                                 where p.ProfileID == id
                                 select new Profile
                                 {
                                     ProfileID = p.ProfileID,
                                     FirstName = p.FirstName,
                                     LastName = p.LastName,
                                     Email = p.Email,
                                     Mobile = p.Mobile
                                 }).First();
            if (profile == null)
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.NotFound));
            return profile;
        }

        // POST api/<controller>
        [HttpPost]
        public Profile Post(Profile value)
        {
             try
            {
                db.Profiles.Add(value);
                db.SaveChanges();
            }
            catch
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.Conflict));
            }
            // create response
            // HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, value);

             return value;
        }

        /* // PUT api/<controller>/5
         public void Put(int id, [FromBody]string value)
         {
         }

         // DELETE api/<controller>/5
         public void Delete(int id)
         {
         }*/
    }
}
