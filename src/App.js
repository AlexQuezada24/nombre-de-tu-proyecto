import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/registerform';
import Login from './components/login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<Login />} />
                {/* Otras rutas según sea necesario */}
            </Routes>
        </Router>
    );
};

export default App;
