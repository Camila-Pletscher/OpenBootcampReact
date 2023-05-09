//fx acceder al estado y modificarlo 

import React, { useState } from 'react'

function Ejemplo1() {

    //Valor inicial para un contador 

    const valorInicial = 0;

    //Valor inicial para una persona 

    const personaInicial = {
        nombre: "Camila",
        email: "camilapletscher@hotmail.com"
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador(){
        setContador(contador + 1);
    }

    function actualizarPersona(){
        setPersona(
            {
                nombre: "Pepe",
                email: "pepeim@img.com"
            }
        )
    }


  return (
    <div>
        <h2>Contador: {contador}</h2>
        <h2>Persona</h2>
        <p>Nombre: {persona.nombre}</p>
        <p>Email: {persona.email}</p>

        <button onClick={actualizarPersona}>Cambiar datos</button>
        <button onClick={incrementarContador}>Aumentar contador</button>

    </div>
  )
}

export default Ejemplo1