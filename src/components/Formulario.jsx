import React, { useState } from "react";

function Formulario({ agregarColaborador }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarColaborador({ nombre, correo, edad, cargo, telefono });
    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setTelefono("");
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <input
  type="text"
  className="form-control mb-3"
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
  placeholder="Nombre"
/>
<input
  type="email"
  className="form-control mb-3"
  value={correo}
  onChange={(e) => setCorreo(e.target.value)}
  placeholder="Correo"
/>
<input
  type="number"
  className="form-control mb-3"
  value={edad}
  onChange={(e) => setEdad(e.target.value)}
  placeholder="Edad"
/>
<input
  type="text"
  className="form-control mb-3"
  value={cargo}
  onChange={(e) => setCargo(e.target.value)}
  placeholder="Cargo"
/>
<input
  type="tel"
  className="form-control mb-3"
  value={telefono}
  onChange={(e) => setTelefono(e.target.value)}
  placeholder="Teléfono"
/>
<button type="submit" className="btn btn-primary mt-3">
  Agregar colaborador
</button>
    </form>
  );
}

export default Formulario;
