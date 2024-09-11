using Microsoft.AspNetCore.Mvc;
using EmployeeManagementApp.Data;
using EmployeeManagementApp.Models;
using System.Linq;

namespace EmployeeManagementApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeContext _context;

        public EmployeeController(EmployeeContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetEmployees()
        {
            var employees = _context.Employees.ToList();
            return Ok(employees);
        }

        [HttpGet("{id}")]
        public IActionResult GetEmployee(int id)
        {
            var employee = _context.Employees.Find(id);
            if (employee == null)
                return NotFound();
            return Ok(employee);
        }

        [HttpPost]
        public IActionResult AddEmployee([FromBody] Employee employee)
        {
            employee.date_of_birth = DateTime.SpecifyKind(employee.date_of_birth, DateTimeKind.Utc);
            _context.Employees.Add(employee);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetEmployee), new { id = employee.id }, employee);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateEmployee(int id, [FromBody] Employee updatedEmployee)
        {
            var employee = _context.Employees.Find(id);
            if (employee == null)
                return NotFound();

            employee.first_name = updatedEmployee.first_name;
            employee.last_name = updatedEmployee.last_name;
            employee.date_of_birth = updatedEmployee.date_of_birth;
            _context.SaveChanges();
            return NoContent();
        }
    }
}