import React from 'react';
import Navegacion from './Navegacion'; 
import '../styles/styleinicio.css';

const Home = () => {
  return (
    <>
      <Navegacion /> 

      <main className="home-container">
        <h1 className="titulo">Pastelería</h1>

        <p className="subtitulo">
          Pastelería 1000 Sabores celebra su 50 aniversario como un referente en la repostería chilena.
          Famosa por su participación en un récord Guinness en 1995, cuando colaboró en la creación de la
          torta más grande del mundo.
        </p>

        <section className="productos">
          <div className="producto">
            <img src="https://amoradulce.com/wp-content/uploads/2019/12/Torta-chocolate-1_04_13_2024-scaled.jpg" alt="torta de chocolate" />
            <p>Un espacio web donde estudiantes de gastronomía de Duoc UC compartan recetas detalladas paso a paso —como queque marmolado, glaseado real o galletas troqueladas— junto a consejos técnicos sobre masas batidas y decoraciones.</p>
          </div>

          <div className="producto">
            <img src="https://cdn.pixabay.com/photo/2021/02/09/15/18/chocolate-cake-5998815_1280.jpg" alt="torta de chocolate" />
            <p>Incluye fotos del proceso, comentarios de los alumnos y espacio para preguntas de otros estudiantes, generando comunidad activa y educativa.</p>
          </div>

          <div className="producto">
            <img src="https://images.pexels.com/photos/8439888/pexels-photo-8439888.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260" alt="torta de chocolate" />
            <p>Inspirando a nuevas generaciones de pasteleros a compartir y mejorar sus técnicas con pasión.</p>
          </div>
          
        </section>
      </main>
    </>
  );
};

export default Home;
