import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await axios.get('/api/employee');
        setEmployees(response.data);
    };

    const handleRefresh = () => {
        fetchEmployees();
    };

    return (
        <div>
            <h1>Employee List</h1>
            <a href="/add">Add Employee</a>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        <a href={`/edit/${employee.id}`}>
                            {employee.first_name} {employee.last_name}
                        </a>
                    </li>
                ))}
            </ul>
            <button onClick={handleRefresh}>Refresh</button>
        </div>
    );
};

export default EmployeeList;
