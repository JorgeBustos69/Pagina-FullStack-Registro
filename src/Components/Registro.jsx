import React, { useState } from 'react';
import Navegacion from './Navegacion';
import '../styles/style.css';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombres: '', apellidos: '', direccion: '', correo: '',
    contraseña: '', confirmar: '', edad: '', codigo: ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [erroresCampos, setErroresCampos] = useState({});

  const validarCampo = (name, value, allData) => {
    let error = '';
    const contraseña = allData.contraseña;

    if (name === 'nombres' || name === 'apellidos' || name === 'direccion') {
      if (value.length > 0 && value.length < 3) {
        error = `El campo ${name} debe tener mínimo 3 letras.`;
      }
    } else if (name === 'correo') {
      if (value.length > 0 && (value.length < 3 || !value.includes("@"))) {
        error = "El correo debe contener un @ y mínimo 3 letras.";
      }
    } else if (name === 'contraseña') {
      if (value.length > 0 && value.length < 8) {
        error = "La contraseña debe tener mínimo 8 caracteres.";
      }
    } else if (name === 'confirmar') {
      if (value.length > 0 && value !== contraseña) {
        error = "Las contraseñas no coinciden.";
      }
    } else if (name === 'codigo') {
      if (value.length > 0 && value.length < 8) {
        error = "El código de registro debe tener mínimo 8 caracteres.";
      }
    } else if (name === 'edad') {
      const age = parseInt(value);
      if (value.length > 0 && (isNaN(age) || age < 0 || age > 150)) {
        error = "La edad debe ser válida (0-150).";
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const error = validarCampo(name, value, { ...formData, [name]: value });
    setErroresCampos(prev => ({ ...prev, [name]: error }));
    const primerError = Object.values({ ...erroresCampos, [name]: error }).find(msg => msg);
    setErrorMsg(primerError || '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let erroresEncontrados = {};
    let formularioValido = true;

    Object.keys(formData).forEach(name => {
      const error = validarCampo(name, formData[name], formData);
      if (error) {
        erroresEncontrados[name] = error;
        formularioValido = false;
      }
    });

    setErroresCampos(erroresEncontrados);

    if (formularioValido) {
      alert("✅ Cuenta creada con éxito!");
      console.log("Datos enviados:", formData);
    } else {
      const primerError = Object.values(erroresEncontrados).find(msg => msg);
      setErrorMsg(primerError || "Por favor, corrige los errores en el formulario.");
    }
  };

  const handleReset = () => {
    setFormData({
      nombres: '', apellidos: '', direccion: '', correo: '',
      contraseña: '', confirmar: '', edad: '', codigo: ''
    });
    setErrorMsg('');
    setErroresCampos({});
  };

  return (
    <>
      <Navegacion />

      <div className="registro-page">
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <h1>Crear cuenta nueva 🍰</h1>

          <div className="row">
            <label>Nombres:</label>
            <input
              type="text"
              name="nombres"
              placeholder="Diego Rafael"
              value={formData.nombres}
              onChange={handleChange}
              className={erroresCampos.nombres ? 'error' : ''}
              required
            />
          </div>

          <div className="row">
            <label>Apellidos:</label>
            <input
              type="text"
              name="apellidos"
              placeholder="Flores Valdenegro"
              value={formData.apellidos}
              onChange={handleChange}
              className={erroresCampos.apellidos ? 'error' : ''}
              required
            />
          </div>

          <div className="row">
            <label>Dirección:</label>
            <input
              type="text"
              name="direccion"
              placeholder="Padre Hurtado"
              value={formData.direccion}
              onChange={handleChange}
              className={erroresCampos.direccion ? 'error' : ''}
              required
            />
          </div>

          <div className="row">
            <label>Correo:</label>
            <input
              type="email"
              name="correo"
              placeholder="DiegoF@gmail.com"
              value={formData.correo}
              onChange={handleChange}
              className={erroresCampos.correo ? 'error' : ''}
              required
            />
          </div>

          <div className="row">
            <label>Contraseña:</label>
            <input
              type="password"
              name="contraseña"
              placeholder="contraseñacienporcientosegura"
              value={formData.contraseña}
              onChange={handleChange}
              className={erroresCampos.contraseña ? 'error' : ''}
              required
            />
          </div>

          <div className="row">
            <label>Confirmar contraseña:</label>
            <input
              type="password"
              name="confirmar"
              placeholder="contraseñacienporcientosegura"
              value={formData.confirmar}
              onChange={handleChange}
              className={erroresCampos.confirmar ? 'error' : ''}
              required
            />
          </div>

          <div className="row">
            <label>Edad:</label>
            <input
              type="number"
              name="edad"
              placeholder="28"
              value={formData.edad}
              onChange={handleChange}
              className={erroresCampos.edad ? 'error' : ''}
              required
            />
          </div>

          <div className="row">
            <label>Código de registro (solo si tiene alguno):</label>
            <input
              type="text"
              name="codigo"
              placeholder="CODIGODSCTO123"
              value={formData.codigo}
              onChange={handleChange}
              className={erroresCampos.codigo ? 'error' : ''}
            />
          </div>

          <div className="botones">
            <button type="reset">Limpiar</button>
            <button type="submit">Enviar</button>
          </div>

          {errorMsg && <p className="error-msg">{errorMsg}</p>}
        </form>
      </div>
    </>
  );
};

export default Registro;
