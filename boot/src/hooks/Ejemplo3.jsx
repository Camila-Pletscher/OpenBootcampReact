// useState
// useContext

import React, { useContext, useState } from "react";

const miContexto = React.createContext(null)

function Componente1() {

    const state = useContext(miContexto);

  return <div>
  <h1>
    El token es: {state.token}
  </h1>
  <Componente2/>

  </div>;
}

function Componente2() {

    const state = useContext(miContexto);

  return <div>
  <h2>
    La sesión es: {state.sesion}
  </h2>

  </div>;
}



export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '12354789',
        sesion: 1 
    }

    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSesionData(
            {
                token: 'dasdas65',
                sesion: sesionData.sesion + 1
            }
        )
    }

  return (
    <miContexto.Provider value={sesionData}>
    {/* todo lo que esta adentro puede leer los datos de sesionData */}
    <Componente1/>
    <button onClick={actualizarSesion}>Actualizar sesion </button>
    </miContexto.Provider>
  )
}

