using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using myproject.Model1;
using myproject.Repository;

namespace myproject.Repository
{
    public interface IUserRepository
    {
         public List<employee> Get();
        public  employee Get(int id);
         public void AddUser (employee data);
          public Task<bool> SaveChanges();
          public void Delete(employee data);
    }
}