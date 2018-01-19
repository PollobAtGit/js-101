using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Basic.Controllers
{
    [Produces("application/json")]
    [Route("api/Customer")]
    public class CustomerController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Customer> GetCustomers()
        {
            return new List<Customer>
            {
                new Customer { Id = 1, FirstName = "Bobbette", LastName = "Wignall", Email = "bwignall0@psu.edu", Gender = "Female", City = "Bochum", Country = "Germany"},
                new Customer { Id = 2, FirstName = "Christine", LastName = "ducarme", Email = "cducarme1@state.tx.us", Gender = "Female", City = "Makariv", Country = "Ukraine"},
                new Customer { Id = 3, FirstName = "Geralda", LastName = "Byart", Email = "gbyart2@amazon.com", Gender = "Female", City = "Tha Lai Chau", Country = "Vietnam"},
                new Customer { Id = 4, FirstName = "Brynna", LastName = "Couronne", Email = "bcouronne3@abc.net.au", Gender = "Female", City = "Ciudad del Este", Country = "Paraguay"},
                new Customer { Id = 5, FirstName = "Brynna", LastName = "Couronne", Email = "bcouronne3@abc.net.au", Gender = "Female", City = "Ciudad del Este", Country = "Paraguay"},
                new Customer { Id = 6, FirstName = "Darell", LastName = "Foxhall", Email = "dfoxhall5@cnet.com", Gender = "Female", City = "Daqiao", Country = "China"},
                new Customer { Id = 7, FirstName = "Glynda", LastName = "McCrystal", Email = "gmccrystal6@last.fm", Gender = "Female", City = "Izumi", Country = "Japan"},
                new Customer { Id = 8, FirstName = "Britteny", LastName = "Broy", Email = "bbroy7@topsy.com", Gender = "Female", City = "Mazhu", Country = "China"},
                new Customer { Id = 10, FirstName = "Josselyn", LastName = "Kinlock", Email = "jkinlock9@amazon.co.uk", Gender = "Female", City = "Wulan", Country = "China"},
                new Customer { Id = 11, FirstName = "Erick", LastName = "Gheeraert", Email = "egheeraerta@ed.gov", Gender = "Male", City = "Heshe", Country = "China"},
                new Customer { Id = 12, FirstName = "Riobard", LastName = "Tarrant", Email = "rtarrantb@umich.edu", Gender = "Male", City = "Besisahar", Country = "Nepal"},
                new Customer { Id = 13, FirstName = "Langsdon", LastName = "Gerardi", Email = "lgerardic@jigsy.com", Gender = "Male", City = "Cikaso", Country = "Indonesia"},
                new Customer { Id = 14, FirstName = "Thaine", LastName = "Brann", Email = "tbrannd@themeforest.net", Gender = "Male", City = "Nizhneivkino", Country = "Russia"},
                new Customer { Id = 15, FirstName = "Collie", LastName = "Dewes", Email = "cdewese@businesswire.com", Gender = "Female", City = "Rettikhovka", Country = "Russia"},
                new Customer { Id = 16, FirstName = "Donny", LastName = "Ingleson", Email = "dinglesonf@squidoo.com", Gender = "Female", City = "Villasis", Country = "Philippines"},
                new Customer { Id = 17, FirstName = "Vinita", LastName = "Dowles", Email = "vdowlesg@ask.com", Gender = "Female", City = "Santo Tomas", Country = "Philippines"},
                new Customer { Id = 18, FirstName = "Bil", LastName = "Rowan", Email = "browanh@scribd.com", Gender = "Male", City = "Huangtian", Country = "China"},
                new Customer { Id = 19, FirstName = "Yardley", LastName = "Lambdean", Email = "ylambdeani@netvibes.com", Gender = "Male", City = "Beisijiazi", Country = "China"},
                new Customer { Id = 20, FirstName = "Renell", LastName = "Valentinetti", Email = "rvalentinettij@auda.org.au", Gender = "Female", City = "Gayam", Country = "Indonesia"}
            };
        }
    }
}

/*
    new Customer { Id = 2, FirstName = "Christine", LastName = "ducarme", Email = "cducarme1@state.tx.us", Gender = "Female", City = "Makariv", Country = "Ukraine"},
    new Customer { Id = 3, FirstName = "Geralda", LastName = "Byart", Email = "gbyart2@amazon.com", Gender = "Female", City = "Tha Lai Chau", Country = "Vietnam"},
    new Customer { Id = 4, FirstName = "Brynna", LastName = "Couronne", Email = "bcouronne3@abc.net.au", Gender = "Female", City = "Ciudad del Este", Country = "Paraguay"},
    new Customer { Id = 6, FirstName = "Darell", LastName = "Foxhall", Email = "dfoxhall5@cnet.com", Gender = "Female", City = "Daqiao", Country = "China"},
    new Customer { Id = 7, FirstName = "Glynda", LastName = "McCrystal", Email = "gmccrystal6@last.fm", Gender = "Female", City = "Izumi", Country = "Japan"},
    new Customer { Id = 8, FirstName = "Britteny", LastName = "Broy", Email = "bbroy7@topsy.com", Gender = "Female", City = "Mazhu", Country = "China"},
    new Customer { Id = 10, FirstName = "Josselyn", LastName = "Kinlock", Email = "jkinlock9@amazon.co.uk", Gender = "Female", City = "Wulan", Country = "China"},
    new Customer { Id = 11, FirstName = "Erick", LastName = "Gheeraert", Email = "egheeraerta@ed.gov", Gender = "Male", City = "Heshe", Country = "China"},
    new Customer { Id = 12, FirstName = "Riobard", LastName = "Tarrant", Email = "rtarrantb@umich.edu", Gender = "Male", City = "Besisahar", Country = "Nepal"},
    new Customer { Id = 13, FirstName = "Langsdon", LastName = "Gerardi", Email = "lgerardic@jigsy.com", Gender = "Male", City = "Cikaso", Country = "Indonesia"},
    new Customer { Id = 14, FirstName = "Thaine", LastName = "Brann", Email = "tbrannd@themeforest.net", Gender = "Male", City = "Nizhneivkino", Country = "Russia"},
    new Customer { Id = 15, FirstName = "Collie", LastName = "Dewes", Email = "cdewese@businesswire.com", Gender = "Female", City = "Rettikhovka", Country = "Russia"},
    new Customer { Id = 16, FirstName = "Donny", LastName = "Ingleson", Email = "dinglesonf@squidoo.com", Gender = "Female", City = "Villasis", Country = "Philippines"},
    new Customer { Id = 17, FirstName = "Vinita", LastName = "Dowles", Email = "vdowlesg@ask.com", Gender = "Female", City = "Santo Tomas", Country = "Philippines"},
    new Customer { Id = 18, FirstName = "Bil", LastName = "Rowan", Email = "browanh@scribd.com", Gender = "Male", City = "Huangtian", Country = "China"},
    new Customer { Id = 19, FirstName = "Yardley", LastName = "Lambdean", Email = "ylambdeani@netvibes.com", Gender = "Male", City = "Beisijiazi", Country = "China"},
    new Customer { Id = 20, FirstName = "Renell", LastName = "Valentinetti", Email = "rvalentinettij@auda.org.au", Gender = "Female", City = "Gayam", Country = "Indonesia"}
*/
