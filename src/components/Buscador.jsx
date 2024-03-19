import React from 'react';

function Buscador({ buscarColaborador }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Buscar..."
      onChange={(e) => buscarColaborador(e.target.value)}
    />
  );
}

export default Buscador;