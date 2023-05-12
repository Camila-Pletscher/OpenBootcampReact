import React, { useState } from 'react'
import Child from '../pure/child'

const Father = () => {

    const [name, setName] = useState('Cami')

    function showMessage(text) {
        alert(`Message: ${text}`)
    }

    function updateName(name){
        setName(name)
    }


  return (
    <div style={{backgroundColor: 'tomato', padding: '30px'}}>
        <Child name={name} send={showMessage} update={updateName}/>
    </div>
  )
}

export default Father