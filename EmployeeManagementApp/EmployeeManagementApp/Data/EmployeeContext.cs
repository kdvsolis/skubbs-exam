using EmployeeManagementApp.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagementApp.Data
{

    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }
    }
}
