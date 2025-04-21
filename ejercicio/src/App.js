import React from 'react';
import HomePage from "./pages/HomePage";



function App() {

  let persona = {
    nombre: 'Juan',
    edad: 25,
    curso: 'programación',
    presente: false
  }

  let grupo = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Luciano', edad: 19 },
    { nombre: 'Jorge', edad: 20 },
    { nombre: 'José', edad: 29 },
    { nombre: 'Alberto', edad: 30 }
  ];

  return (
    <div>

      <HomePage persona={persona} grupo={grupo} />

    </div>
  );
}

export default App;
