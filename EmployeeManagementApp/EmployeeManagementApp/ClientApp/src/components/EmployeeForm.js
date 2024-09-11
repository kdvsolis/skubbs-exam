import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
    const [employee, setEmployee] = useState({ first_name: '', last_name: '', date_of_birth: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchEmployee(id);
        }
    }, [id]);

    const fetchEmployee = async (id) => {
        const response = await axios.get(`/api/employee/${id}`);
        setEmployee(response.data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await axios.put(`/api/employee/${id}`, employee);
        } else {
            await axios.post('/api/employee', employee);
        }
        navigate('/');
    };

    return (
        <div>
            <h2>{id ? 'Edit' : 'Add'} Employee</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="first_name"
                    value={employee.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                />
                <input
                    type="text"
                    name="last_name"
                    value={employee.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                />
                <input
                    type="date"
                    name="date_of_birth"
                    value={employee.date_of_birth}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
