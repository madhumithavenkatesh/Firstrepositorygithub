using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using myproject.Entities;
using myproject.Model1;
// THE BELOw line is for  dbcontext
using Microsoft.EntityFrameworkCore;


namespace myproject
{
    public class DataContext : DbContext
    {
        public  DataContext(DbContextOptions<DataContext> options): base(options){
            
        }
        public DbSet<employee> Userdata {get; set;}
      

        
    }
}