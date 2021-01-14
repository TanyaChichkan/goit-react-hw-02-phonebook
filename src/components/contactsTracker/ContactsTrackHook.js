import React, {useState} from 'react';

import ContactList from '../contactList/ContactList';
import Filter from '../filter/Filter';
import ContactForm from '../contactForm/ContactForm';

const { v4: uuidv4 } = require('uuid');

const ContactsTrackerHook=()=> {

 const[contacts,setContacts]=useState([{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', update: false},
 {id: 'id-2', name: 'Hermione Kline', number: '443-89-12',update: false},
 {id: 'id-3', name: 'Eden Clements', number: '645-17-79',update: false},
 {id: 'id-4', name: 'Annie Copeland', number: '227-91-26',update: false}]);

  const [filter,setFilter]=useState("");

  const addContact=(name,number)=>{
    const contact = {
      id: uuidv4(),
      name,
      number,
      update: false
    };

    const namesArr = contacts.map(item=>item.name);

    namesArr.find(name =>name.toLowerCase() === contact.name.toLowerCase()) ?
      alert(`${name} is already in the list`) :

      setContacts([...contacts, contact]);

  };

  const changeFilter=e=>{
    setFilter(e.target.value)
  };

  const getVisibleContacts=()=>{
    return contacts.filter(contact=>
    contact.name.toLowerCase().includes(filter.toLowerCase()))
  };

  const removeContact=e=>{
    console.log(e.target);
    setContacts([...contacts.filter(({name})=> name !== e.target.dataset.type)]);
  };

  const updateContact = e=>{
    setContacts([...contacts.map(contact=> {
    return  contact.name === e.target.dataset.name ?
    {...contact, update: !contact.update} : contact
    })
    ])
  };


    return (
      <div>
        <ContactForm onAddContact = {addContact}/>
        <h2>Contacts</h2>
        {contacts.length>1 &&
        <Filter value={filter} onChangeFilter = {changeFilter}/>}

        {getVisibleContacts().length >0 && (
          <ContactList contacts = {getVisibleContacts()} onRemoveContact = {removeContact}
          onUpdateContact = {updateContact}/>
        )}

      </div>
    )

};

export default ContactsTrackerHook;