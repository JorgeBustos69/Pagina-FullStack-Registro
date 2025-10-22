import React from 'react';
import Navegacion from './Navegacion'; 
import '../styles/styleinicio.css';

const Home = () => {
    return (
        <>
            <Navegacion /> 
            <h1>Pasteleria</h1> 
            <section id ="segunda">
                <p></p> 
                <p>
                    Pastelería 1000 Sabores celebra su 50 aniversario como un referente en la repostería chilena.
                    Famosa por su participación en un récord Guinness en 1995, cuando colaboró en la creación de la
                    torta más grande del mundo
                </p>
                <p></p>
            </section>
            <section id ="tercera">
                <div className="row">
                    <img src="https://amoradulce.com/wp-content/uploads/2019/12/Torta-chocolate-1_04_13_2024-scaled.jpg" alt="torta de chocolate" width="300" height="300" />
                    <p>Un espacio web donde estudiantes de gastronomía de Duoc UC compartan recetas detalladas paso a paso —como queque marmolado, glaseado real o galletas troqueladas— junto a consejos técnicos sobre masas batidas, control de temperatura y decoraciones Cada entrada puede incluir fotos del proceso, comentarios de los alumnos y espacio para preguntas de otros estudiantes, generando comunidad activa y educativa.</p>
                </div>  
                <div className="row">
                    <img src="https://cdn.pixabay.com/photo/2021/02/09/15/18/chocolate-cake-5998815_1280.jpg" alt="torta de chocolate" width="300" height="300" />
                    <p>Un espacio web donde estudiantes de gastronomía de Duoc UC compartan recetas detalladas paso a paso —como queque marmolado, glaseado real o galletas troqueladas— junto a consejos técnicos sobre masas batidas, control de temperatura y decoraciones Cada entrada puede incluir fotos del proceso, comentarios de los alumnos y espacio para preguntas de otros estudiantes, generando comunidad activa y educativa.</p>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/8439888/pexels-photo-8439888.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260" alt="torta de chocolate" width="300" height="300" />
                    <p>Un espacio web donde estudiantes de gastronomía de Duoc UC compartan recetas detalladas paso a paso —como queque marmolado, glaseado real o galletas troqueladas— junto a consejos técnicos sobre masas batidas, control de temperatura y decoraciones Cada entrada puede incluir fotos del proceso, comentarios de los alumnos y espacio para preguntas de otros estudiantes, generando comunidad activa y educativa.</p>
                </div> 
            </section>
            <section id="cuarta">
                <div className="row">
                    <img src="https://cdn.pixabay.com/photo/2017/03/07/12/30/chocolate-cake-2123854_1280.jpg" alt="torta de chocolate" width="300" height="300" />
                    <p>Un espacio web donde estudiantes de gastronomía de Duoc UC compartan recetas detalladas paso a paso —como queque marmolado, glaseado real o galletas troqueladas— junto a consejos técnicos sobre masas batidas, control de temperatura y decoraciones Cada entrada puede incluir fotos del proceso, comentarios de los alumnos y espacio para preguntas de otros estudiantes, generando comunidad activa y educativa.</p>
                </div>
                <div className="row">
                    <img src="https://images.stockcake.com/public/c/a/a/caac0e6a-d8c4-4a7f-9f99-16e2761d9a83_large/chocolate-cake-preparation-stockcake.jpg" alt="torta de chocolate" width="300" height="300" />
                    <p>Un espacio web donde estudiantes de gastronomía de Duoc UC compartan recetas detalladas paso a paso —como queque marmolado, glaseado real o galletas troqueladas— junto a consejos técnicos sobre masas batidas, control de temperatura y decoraciones Cada entrada puede incluir fotos del proceso, comentarios de los alumnos y espacio para preguntas de otros estudiantes, generando comunidad activa y educativa.</p>
                </div>
                <div className="row">
                    <img src="https://amoradulce.com/wp-content/uploads/2019/12/Torta-chocolate-1_04_13_2024-scaled.jpg" alt="torta de chocolate" width="300" height="300" />
                    <p>Un espacio web donde estudiantes de gastronomía de Duoc UC compartan recetas detalladas paso a paso —como queque marmolado, glaseado real o galletas troqueladas— junto a consejos técnicos sobre masas batidas, control de temperatura y decoraciones Cada entrada puede incluir fotos del proceso, comentarios de los alumnos y espacio para preguntas de otros estudiantes, generando comunidad activa y educativa.</p>
                </div> 
            </section>
            <section id="quinta">
                <p></p>
                <p></p>
                <p></p>
            </section>
        </>
    );
};

export default Home;