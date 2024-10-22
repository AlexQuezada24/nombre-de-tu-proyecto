import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Asegúrate de importar Link aquí

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Registro exitoso");
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <form 
                onSubmit={handleSubmit} 
                className="bg-gray-800 p-8 rounded shadow-md w-96"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-pink-400">Registrar</h2>
                <div className="mb-4">
                    <label className="block text-gray-300" htmlFor="name">Nombre:</label>
                    <input 
                        type="text" 
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                        className="mt-1 p-2 w-full border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-700 text-white"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300" htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className="mt-1 p-2 w-full border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-700 text-white"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300" htmlFor="password">Contraseña:</label>
                    <input 
                        type="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        className="mt-1 p-2 w-full border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-700 text-white"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300" htmlFor="confirmPassword">Confirmar Contraseña:</label>
                    <input 
                        type="password" 
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required 
                        className="mt-1 p-2 w-full border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-700 text-white"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition duration-200"
                >
                    Registrarse
                </button>
                <p className="mt-4 text-gray-300 text-center">
                    ¿Ya tienes una cuenta? 
                    <Link to="/login" className="text-pink-400 hover:text-pink-500 font-semibold ml-1">
                        Inicia sesión aquí
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterForm;
