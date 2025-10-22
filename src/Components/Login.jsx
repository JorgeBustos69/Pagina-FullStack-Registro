
import React, { useState } from 'react';
import Navegacion from './Navegacion';
import '../styles/styleLogin.css';

const Login = () => {
    const [formData, setFormData] = useState({
        correo: '',
        contraseña: ''
    });

    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        
        if (id === 'correo') {
            if (value.length < 3 || !value.includes("@")) {
                setErrorMsg("Ingresa mínimo 3 letras y el correo debe contener un @.");
            } else {
                setErrorMsg("");
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (errorMsg || formData.correo === '' || formData.contraseña === '') {
            alert("Por favor, completa los campos correctamente.");
        } else {
            console.log("Intento de login con:", formData);
            alert("Inicio de sesión exitoso (simulado).");

        }
    };

    return (
        <>
            <Navegacion />
            <form onSubmit={handleSubmit} id="formulario">
                <h1>Iniciar sesión</h1>

                <div className="row">
                    <label htmlFor="correo">Correo: </label>
                    <input 
                        type="text" 
                        id="correo" 
                        value={formData.correo}
                        onChange={handleChange}
                        required
                        className={errorMsg ? 'error' : ''} 
                    />
                </div>
                
                <div className="row">
                    <label htmlFor="contraseña">Contraseña: </label>
                    <input 
                        type="password" 
                        id="contraseña" 
                        value={formData.contraseña}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div>
                    <button type="submit">Enviar</button>
                    <p id="errores" style={{ color: 'red' }}>{errorMsg || ' '}</p>
                </div>
            </form>
        </>
    );
};

export default Login;