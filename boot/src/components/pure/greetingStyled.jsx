import React, { useState } from 'react'

//Definir estilos en constantes

//!si esta logueado
const loggedStyle = {
    color: 'blue'
}

//!Si no esta logueado
const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}



const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false)


  return (
    <div style={logged ? loggedStyle : unLoggedStyle}>
        {logged ? <p> Hola, {props.name} </p> : <p>Please login</p>}
        
        <button onClick={() => setLogged(!logged)}>
            {logged ? 'Logout' : 'Loggin'}
        </button>
    </div>
  )
}

export default GreetingStyled