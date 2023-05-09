// useEffect
// useRef
// useState

import React, { useEffect, useRef, useState } from 'react'

function Ejemplo2() {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const miRef = useRef()

    function incrementar1(){
        setContador1(contador1 + 1)
    }

    function incrementar2(){
        setContador2(contador2 + 1)
    }

    // ! SE EJECUTA CADA VEZ QUE SE CAMBIA EL ESTADO DEL COMPONENTE
    // useEffect(() => {
    //     console.log("Cambio en el estado del componente");
    //     console.log("Mostrando referencia a elemento del DOM");
    //     console.log(miRef);
    // })

    // ! SE EJECUTA CUANDO CAMBIA EL CONTADOR 1 / CONTADOR 2
        useEffect(() => {
        console.log("Cambio en el estado del CONTADOR 1");
        console.log("Mostrando referencia a elemento del DOM");
        console.log(miRef);
    }, [contador1, contador2])

  return (
    <div>
        <h2>Contador 1: {contador1}</h2>
        <h2>Contador 2: {contador2}</h2>

        <h3 ref={miRef}>
            Ejemplo de elemento referenciado
        </h3>

        <div>

            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>

        </div>

    </div>
  )
}

export default Ejemplo2