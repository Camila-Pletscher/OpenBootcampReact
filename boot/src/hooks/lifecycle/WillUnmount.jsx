import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {


    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desasparezca')
    }

  render() {
    return (
      <div>WillUnmount</div>
    )
  }
}


export const WillUnmountHook = () => {

    useEffect(() => {
        
    
      return () => {
        console.log('Comportamiento antes de que el componente desasparezca')
      }
    }, [])
    


  return (
    <div>WillUnmount</div>
  )
}



