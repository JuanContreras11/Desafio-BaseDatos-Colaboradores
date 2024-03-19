import React from 'react';

function Listado({ colaboradores }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Edad</th>
          <th scope="col">Cargo</th>
          <th scope="col">Telefono</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
  export default Listado;