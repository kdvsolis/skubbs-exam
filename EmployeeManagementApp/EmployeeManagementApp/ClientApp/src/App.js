import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

function App() {
    return (
        <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/add" element={<EmployeeForm />} />
            <Route path="/edit/:id" element={<EmployeeForm />} />
        </Routes>
    );
}

export default App;
