import React from 'react'
import PropTypes from "prop-types";
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact, remove, change}) => {

    function contactStateIcon(){
        if(contact.online){
            return(<i onClick={() => change(contact)} className='bi-toggle-on'></i>)
        } else {
            return(<i onClick={() => change(contact)} className='bi-toggle-off'></i>)
        }
    }

  return (
    <div>
        <div>Name: {contact.name}</div>
        <div>Phone: {contact.cel}</div>
        <div>State: {contactStateIcon()}</div>
        <i onClick={remove} className='bi-trash'></i>
    </div>
  )
}

ContactComponent.propTypes = {
    //Aca nos aseguramos que reciba por pops un dato de tipo task, con el metodo instanceof lo podemos validar. Task es la clase.
    task: PropTypes.instanceOf(Contact).isRequired,
  };

export default ContactComponent