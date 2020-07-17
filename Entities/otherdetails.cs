using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace myproject.Entities
{
    public class otherdetails
    {
         [Key]
        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public string Author { get; set; }
        public string Duration { get; set; } 
        
         [ForeignKey("User")]
 
        public int UserId { get; set; }
        public User UserData { get; set; }
    }
}