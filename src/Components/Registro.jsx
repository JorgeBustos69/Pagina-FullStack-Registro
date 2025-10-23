import React, { useState } from 'react';
import Navegacion from './Navegacion';
import 'bootstrap/dist/css/bootstrap.min.css';
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

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Crear cuenta nueva 🍰</h2>

                {errorMsg && (
                  <div className="alert alert-danger text-center" role="alert">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} onReset={handleReset}>
                  {[
                    { label: "Nombres", name: "nombres", type: "text", placeholder: "Diego Rafael" },
                    { label: "Apellidos", name: "apellidos", type: "text", placeholder: "Flores Valdenegro" },
                    { label: "Dirección", name: "direccion", type: "text", placeholder: "Padre Hurtado" },
                    { label: "Correo", name: "correo", type: "email", placeholder: "DiegoF@gmail.com" },
                    { label: "Contraseña", name: "contraseña", type: "password", placeholder: "contraseñacienporcientosegura" },
                    { label: "Confirmar contraseña", name: "confirmar", type: "password", placeholder: "Repite tu contraseña" },
                    { label: "Edad", name: "edad", type: "number", placeholder: "28" },
                    { label: "Código de registro (solo si tiene alguno)", name: "codigo", type: "text", placeholder: "CODIGODSCTO123" }
                  ].map((campo, i) => (
                    <div className="mb-3" key={i}>
                      <label className="form-label fw-semibold">{campo.label}:</label>
                      <input
                        type={campo.type}
                        name={campo.name}
                        placeholder={campo.placeholder}
                        value={formData[campo.name]}
                        onChange={handleChange}
                        className={`form-control ${erroresCampos[campo.name] ? 'is-invalid' : ''}`}
                        required={campo.name !== 'codigo'}
                      />
                      {erroresCampos[campo.name] && (
                        <div className="invalid-feedback">{erroresCampos[campo.name]}</div>
                      )}
                    </div>
                  ))}

                  <div className="d-flex justify-content-between mt-4">
                    <button type="reset" className="btn btn-outline-secondary px-4">Limpiar</button>
                    <button type="submit" className="btn btn-primary px-4">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
