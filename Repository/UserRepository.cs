using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using myproject.Repository;
using myproject.Model1;

namespace myproject.Repository
{
    public class UserRepository: IUserRepository
    {
          public DataContext dbdata;
          public UserRepository(DataContext data){
dbdata=data;
          }
 
        public List<employee> Get()
        {
            return dbdata.Userdata.ToList();
    }
   public employee Get(int id){
       return dbdata.Userdata.FirstOrDefault(p=>p.Id==id);
   }
    public void AddUser(employee data){
        dbdata.Userdata.Add(data);
    }
   public async Task<bool> SaveChanges(){
       return await dbdata.SaveChangesAsync()>0;
   }
public void Delete(employee data){
     dbdata.Userdata.Remove(data);
}


}
}