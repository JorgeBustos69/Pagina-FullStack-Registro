import React from 'react';
import Navegacion from './Navegacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styleinicio.css';

const Home = () => {
  return (
    <>
      <Navegacion />

      <main className="container py-5 text-center">
        <h1 className="text-brown fw-bold mb-4 display-5">Pastelería 1000 Sabores</h1>

        <p className="lead mb-5 text-muted">
          Celebramos <strong>50 años</strong> como un referente en la repostería chilena.  
          Famosa por su participación en el <strong>Récord Guinness</strong> de 1995, cuando colaboró en la creación de la
          torta más grande del mundo 🎂.
        </p>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card shadow-sm h-100 border-0 rounded-4">
              <img
                src="https://amoradulce.com/wp-content/uploads/2019/12/Torta-chocolate-1_04_13_2024-scaled.jpg"
                className="card-img-top rounded-top-4"
                alt="Torta de chocolate"
                style={{ objectFit: 'cover', height: '250px' }}
              />
              <div className="card-body">
                <p className="card-text text-secondary">
                  Un espacio donde estudiantes de gastronomía de Duoc UC comparten recetas paso a paso —
                  como queque marmolado, glaseado real o galletas troqueladas— junto a consejos sobre masas
                  batidas y decoraciones.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm h-100 border-0 rounded-4">
              <img
                src="https://cdn.pixabay.com/photo/2021/02/09/15/18/chocolate-cake-5998815_1280.jpg"
                className="card-img-top rounded-top-4"
                alt="Torta con frambuesas"
                style={{ objectFit: 'cover', height: '250px' }}
              />
              <div className="card-body">
                <p className="card-text text-secondary">
                  Incluye fotos del proceso, comentarios de los alumnos y espacio para preguntas, generando una
                  comunidad activa y educativa que impulsa el aprendizaje colaborativo.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm h-100 border-0 rounded-4">
              <img
                src="https://images.pexels.com/photos/8439888/pexels-photo-8439888.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260"
                className="card-img-top rounded-top-4"
                alt="Torta mixta"
                style={{ objectFit: 'cover', height: '250px' }}
              />
              <div className="card-body">
                <p className="card-text text-secondary">
                  Inspiramos a nuevas generaciones de pasteleros a compartir y mejorar sus técnicas con pasión,
                  creatividad y respeto por los ingredientes tradicionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
