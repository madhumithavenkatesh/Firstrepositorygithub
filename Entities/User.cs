using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace myproject.Entities
{
    public class User
    { 
        [Key]

 
        //          public  string InvoiceType {get; set;}
        //          public int Date {get;set;}
        //          public int Currency{get;set;}
        // public int  InvoiceAmount {get; set;}

                public int  Id {get; set;}
        public int  Name {get; set;}
          public Int64 phonenumber {get;set;}

        public string email{get;set;} 
        public string password{get;set;}
    }
}