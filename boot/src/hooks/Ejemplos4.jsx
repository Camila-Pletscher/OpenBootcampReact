//props.children

import React from 'react'

function Ejemplos4(props) {
  return (
    <div>
        <h2>
            Nombre: {props.nombre}
        </h2>

        {props.children}

    </div>
  )
}

export default Ejemplos4