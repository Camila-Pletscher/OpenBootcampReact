import React, { useRef } from 'react'
import PropTypes from "prop-types";
import { Contact } from '../../../models/contact.class';

const ContactForm = ({add}) => {

    const nameRef = useRef('');
    const celRef = useRef('');


    function addContact(e){
        e.preventgitDefault();
        const newContact = new Contact(
            nameRef.current.value,
            celRef.current.value,
            false

        );
        add(newContact);
    }



  return (
    <form onSubmit={addContact}>
        <input ref={nameRef} id='inputName' type='text' required placeholder='Inserte name'/>
        <input ref={celRef} id='inputCel' type='number' required placeholder='Inserte number'/>
        <button type='submit'>Add</button>
    </form>
  )
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
  };

export default ContactForm