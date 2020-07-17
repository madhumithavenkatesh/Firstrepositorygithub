using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using myproject.Model1;
using myproject.Repository;

namespace myproject.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class EmployeedetailController:ControllerBase
    {
private readonly IUserRepository userRep;

public EmployeedetailController (IUserRepository userRep1){
    userRep=userRep1;
}

[HttpGet]
public IActionResult Get(){
    return Ok(userRep.Get());
}
[HttpGet("{id}")]
public IActionResult Get(int id){
    return Ok(userRep.Get(id));
}



[HttpPost]
public async Task<IActionResult> Post(employee data)
{
    if(data != null){
        userRep.AddUser(data);
        if(await userRep.SaveChanges())
        {
            return Created($"api/employeedetailcontroller/{data.Id}",data);
        }
    }
    return BadRequest("Failed");
}
[HttpDelete("{id}")]
public async Task<IActionResult> Delete(int id){
    if(id != null){
    employee  data= userRep.Get(id);
    userRep.Delete(data);
    if(await userRep.SaveChanges())
    {
    return Created($"api/employeedetailcontroller/{data.Id}",data);
    }

       
    }
   return BadRequest("Failed");
}
[HttpPut("{id}")]

public async Task<IActionResult> Update(int id,employee data)
{
   employee data1=userRep.Get(id);
   data1.email=data.email;
   data1.Name=data.Name;
   data1.phonenumber=data.phonenumber;
   data1.password=data.password;
   if(await userRep.SaveChanges())
   {
       return NoContent();
   }
   else
   {
   return BadRequest("failed");
   }
}
    }













        // public DataContext dbata;
        // public EmployeedetailController(DataContext data)
        // {
        //     dbata = data;
        // }
        // [HttpGet]
        // public List<employee> Get()
        // {
        //     return dbata.Userdata.ToList();

            // employee[] employees=new employee[]{
            //     new employee{Id=1,Name="madhu"},
            //     new employee{Id=2,Name="sakthi"}
            // };



            // [HttpGet]       
            //  public IEnumerable<employee> ListAllProducts()        { 
            //                return employees;       
            //                 }    
            //                   [HttpGet("{id}")]
            // public employee get(int id) {
            //     return employees.FirstOrDefault(p=>p.Id==id);
            //   Above code explains the below
            //       partial=>prop.id==id==function(int id){
            //           foreach(var i in employees){
            //               if(i.Id==id){
            // return i;
            //               }
            //           }
            //       }
    //     }

    // }

}