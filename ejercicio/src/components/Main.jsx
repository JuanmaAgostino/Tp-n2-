import React from 'react';
import '../style/MainEstilo.css';



const Main = ({persona,grupo}) => {
    
    return (
    <main >
      <div className='tarjeta'>
        <h2>Persona</h2>
        <ul>
          <li>{persona.nombre}</li>
          <li>{persona.edad}</li>
          <li>{persona.curso}</li>
          <li>Asistencia: {persona.asistencia ? 'presente':'ausente'}</li>
        </ul>
      </div>
      <div className='tarjeta'>
        <h2>Grupo</h2>
        <ul>
          {grupo.map((grupo, index) => (
            <li key={index}>
              {grupo.nombre} - {grupo.edad} años
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Main;
