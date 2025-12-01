import React from "react";
import Navegacion from "./Navegacion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styleinicio.css";

const Home = () => {
  return (
    <>
      <Navegacion />

      <main
        className="py-5"
        style={{ backgroundColor: "#fdf1de", minHeight: "100vh" }}
      >
        <div className="container text-center">
          <h1
            className="fw-bold mb-3"
            style={{
              color: "#6b3e26",
              fontFamily: "'Pacifico', cursive",
            }}
          >
            Pastelería 1000 Sabores
          </h1>

          <p className="text-muted mb-5">
            Pastelería <strong>1000 Sabores</strong> celebra su{" "}
            <strong>50 aniversario</strong> como un referente en la repostería chilena.
            Famosa por su participación en un{" "}
            <strong>récord Guinness en 1995</strong>, cuando colaboró en la creación
            de la torta más grande del mundo 🎂.
          </p>

          <div className="row justify-content-center g-4">
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="card border-0 shadow-lg rounded-4" style={{ width: "90%" }}>
                <img
                  src="https://amoradulce.com/wp-content/uploads/2019/12/Torta-chocolate-1_04_13_2024-scaled.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Torta de chocolate"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text text-secondary">
                    Un espacio web donde estudiantes de gastronomía de Duoc UC comparten recetas
                    detalladas paso a paso —como queque marmolado, glaseado real o galletas troqueladas— 
                    junto a consejos sobre masas batidas, control de temperatura y decoraciones.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="card border-0 shadow-lg rounded-4" style={{ width: "90%" }}>
                <img
                  src="https://cdn.pixabay.com/photo/2021/02/09/15/18/chocolate-cake-5998815_1280.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Torta frambuesas"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text text-secondary">
                    Incluye fotos del proceso, comentarios de los alumnos y espacio para preguntas,
                    generando una comunidad activa y educativa que impulsa el aprendizaje colaborativo.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="card border-0 shadow-lg rounded-4" style={{ width: "90%" }}>
                <img
                  src="https://images.pexels.com/photos/8439888/pexels-photo-8439888.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260"
                  className="card-img-top rounded-top-4"
                  alt="Torta mixta"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text text-secondary">
                    Inspiramos a nuevas generaciones de pasteleros a compartir y mejorar sus técnicas
                    con pasión, creatividad y respeto por los ingredientes tradicionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
