import React, { useState } from 'react'
import ContactForm from '../pure/forms/contact_form';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const defaultContact1 = new Contact (
        "Cami",
        1168545967,
        false
    );

    const defaultContact2 = new Contact (
        "CamiLa",
        1168545967,
        false
    );

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2]);

    function addContact(contact){
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    function deleteContact(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);
    }

    function changeState(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].online = !tempContacts[index].online;
        setContacts(tempContacts);
    }


  return (
    <div>


        <h1>Contacts:</h1>

        <div>
            {contacts.map((contact, index) => {
                return <ContactComponent key={index} contact={contact} remove={deleteContact} change={changeState} />
                
            })}
        </div>
        <div>
            <ContactForm add={addContact} />
        </div>

    </div>
  )
}

export default ContactListComponent