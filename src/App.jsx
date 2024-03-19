import React, { useState } from 'react';
import "./App.css";
import { BaseColaboradores } from "./BaseColaboradores";
import Formulario from "./components/Formulario";
import Alert from './components/Alert';
import Buscador from './components/Buscador';
import Listado from "./components/Listado";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState('');
  const [tipo, setTipo] = useState('success');

  const agregarColaborador = (colaborador) => {
    if (Object.values(colaborador).some((campo) => campo === '')) {
      setMensaje('Todos los campos son obligatorios');
      console.log(colaborador);
      setTipo('danger');
    } else {
      setColaboradores([...colaboradores, colaborador]);
      setMensaje('Colaborador agregado exitosamente');
      setTipo('success');
      console.log(colaborador);
    }
  };

  const buscarColaborador = (termino) => {
    const resultados = BaseColaboradores.filter((colaborador) =>
      Object.values(colaborador).some((campo) =>
        campo.toLowerCase().includes(termino.toLowerCase())
      )
    );
    setColaboradores(resultados);
  };
  return (
    <>
      <h1>Listado Colaboradores</h1>
        <Buscador buscarColaborador={buscarColaborador} />
      <div className="container">
        <Listado colaboradores={colaboradores} />
        <Formulario className="formulario" agregarColaborador={agregarColaborador} />
      </div>
        <Alert mensaje={mensaje} tipo={tipo}  />
    </>
  );
}

export default App;
