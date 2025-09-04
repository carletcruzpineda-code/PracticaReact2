import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'

function FormRegister() {

  const [nombre,setNombre] = useState ("")
  const [apellido,setApellido] = useState ("")
  const [password,setpassword] = useState ("")

  const cargarDatos = () => {
    console.log(nombre,apellido,password)
    
  }


  return (
    <div>
        <div>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id='nombre' placeholder='Digite su Nombre' value={nombre} onChange={(e) =>setNombre(e.target.value)} />
            <br />
            <label htmlFor="Apellido">Apellido</label>
            <input type="text" id='apellido' placeholder='Digite su apellido' value={apellido} onChange={(e) =>setApellido(e.target.value)} />
            <br />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id='password' placeholder='password' value={password} onChange={(e) =>setpassword(e.target.value)} />

        </div>
        <br />
        <button onClick={cargarDatos}>Cargar Datos</button>
        <br />

        <p></p>

        <p>Ir a <Link to= "/home">Home</Link> </p>
        <h1>{nombre}</h1>
    </div>
  )
}

export default FormRegister