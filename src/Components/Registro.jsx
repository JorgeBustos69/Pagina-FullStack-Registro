import React, { useState } from 'react';
import Navegacion from './Navegacion';
import '../styles/style.css'; 

const Registro = () => {
    const [formData, setFormData] = useState({
        nombres: '', apellidos: '', direccion: '', correo: '',
        contraseña: '', confirmar: '', edad: '', codigo: ''
    });
    const [errorMsg, setErrorMsg] = useState('');
    
    const validarCampo = (name, value, allData) => {
        let error = '';
        const contraseña = allData.contraseña;
        
        if (['nombres', 'apellidos', 'direccion'].includes(name) && value.length < 3) {
            error = "Ingresa mínimo 3 letras.";
        } else if (name === 'correo' && (value.length < 3 || !value.includes("@"))) {
            error = "Ingresa mínimo 3 letras y el correo debe contener un @.";
        } else if (['contraseña', 'codigo'].includes(name) && value.length > 0 && value.length < 8) {
            error = "Debe tener mínimo 8 caracteres.";
        } else if (name === 'confirmar' && value !== contraseña) {
            error = "Las contraseñas no coinciden.";
        } else if (name === 'edad') {
            const age = parseInt(value);
            if (isNaN(age) || age < 0 || age > 150) {
                 error = "La edad debe ser válida (0-150).";
            }
        }
        return error;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData(prev => ({ ...prev, [name]: value }));


        const currentData = { ...formData, [name]: value };
        const error = validarCampo(name, value, currentData);
    
        if (error) {
            setErrorMsg(error);
        } else if (!validarFormularioCompleto(currentData)) {
            setErrorMsg('');
        }
    };
    const validarFormularioCompleto = (data) => {
        let allValid = true;
        for (const name in data) {
            if (validarCampo(name, data[name], data)) {
                allValid = false;
                break;
            }
        }
        return allValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const error = validarFormularioCompleto(formData);
        
        if (error) {
            setErrorMsg("Hay errores en el formulario. Por favor, revísalos.");
            alert("Por favor, corrige los errores en el formulario.");
        } else {
            console.log("Datos de registro enviados:", formData);
            alert("Cuenta creada con éxito!");

        }
    };
    
    const handleReset = () => {
        setFormData({
            nombres: '', apellidos: '', direccion: '', correo: '',
            contraseña: '', confirmar: '', edad: '', codigo: ''
        });
        setErrorMsg('');
    };

    return (
        <>
            <Navegacion />
            <form onSubmit={handleSubmit} onReset={handleReset} id="formulario"> 
                <h1>Crear cuenta nueva 🍰</h1>
                
                {Object.keys(formData).map(key => (
                    <div className="row" key={key}>
                        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: </label>
                        <input 
                            type={key.includes('contraseña') ? 'password' : key === 'edad' ? 'number' : 'text'} 
                            id={key} 
                            name={key}
                            placeholder={key}
                            value={formData[key]}
                            onChange={handleChange}
                            onBlur={handleChange} 
                            required={key !== 'codigo'} 
                            className={validarCampo(key, formData[key], formData) ? 'error' : ''}
                        />
                    </div>
                ))}
                
                <button type="reset">Limpiar</button>
                <button type="submit">Enviar</button>
                <p id="errores" style={{ color: 'red' }}>{errorMsg || ' '}</p>
            </form>
        </>
    );
};

export default Registro;