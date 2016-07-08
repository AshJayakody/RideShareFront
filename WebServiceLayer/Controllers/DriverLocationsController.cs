using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using WebServiceLayer.Models;

namespace WebServiceLayer.Controllers
{
    public class DriverLocationsController : ApiController
    {
        private RideShareDbContext db = new RideShareDbContext();

        // GET: api/DriverLocations
        public IQueryable<DriverLocation> GetDriverLocations()
        {
            return db.DriverLocations;
        }

        // GET: api/DriverLocations/5
        [ResponseType(typeof(DriverLocation))]
        public async Task<IHttpActionResult> GetDriverLocation(string id)
        {
            DriverLocation driverLocation = await db.DriverLocations.FindAsync(id);
            if (driverLocation == null)
            {
                return NotFound();
            }

            return Ok(driverLocation);
        }

        // PUT: api/DriverLocations/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutDriverLocation(string id, DriverLocation driverLocation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != driverLocation.UserId)
            {
                return BadRequest();
            }

            db.Entry(driverLocation).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DriverLocationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/DriverLocations
        [ResponseType(typeof(DriverLocation))]
        public async Task<IHttpActionResult> PostDriverLocation(DriverLocation driverLocation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.DriverLocations.Add(driverLocation);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DriverLocationExists(driverLocation.UserId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = driverLocation.UserId }, driverLocation);
        }

        // DELETE: api/DriverLocations/5
        [ResponseType(typeof(DriverLocation))]
        public async Task<IHttpActionResult> DeleteDriverLocation(string id)
        {
            DriverLocation driverLocation = await db.DriverLocations.FindAsync(id);
            if (driverLocation == null)
            {
                return NotFound();
            }

            db.DriverLocations.Remove(driverLocation);
            await db.SaveChangesAsync();

            return Ok(driverLocation);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DriverLocationExists(string id)
        {
            return db.DriverLocations.Count(e => e.UserId == id) > 0;
        }
    }
}