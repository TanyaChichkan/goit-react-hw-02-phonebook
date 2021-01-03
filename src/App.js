import React, {Component} from 'react';
import ReactDOM from 'react';
import ContactList from './ContactList';
import Filter from './Filter';
import ContactForm from './ContactForm';
import styles from './Form.module.css';
const { v4: uuidv4 } = require('uuid');


class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', update: false},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12',update: false},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79',update: false},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26',update: false},
    ],
    filter:"",
  };


  addContact=(name,number)=>{
    const contact = {
      id: uuidv4(),
      name,
      number,
      update: false
    };

    const namesArr = this.state.contacts.map(item=>item.name);

      namesArr.find(name =>name.toLowerCase() === contact.name.toLowerCase()) ?
        alert(`${name} is already in the list`) :

        this.setState(prevState=>{
          return {
            contacts: [...prevState.contacts, contact]
          };
    });
  };

  changeFilter=filter=>{
    this.setState({filter})
  };

  getVisibleContacts=()=>{
    const {contacts,filter} = this.state;

    return contacts.filter(contact=>
    contact.name.toLowerCase().includes(filter.toLowerCase()))
  };

  removeContact=idContact=>{
    this.setState(prevState=>{
      return {
        contacts: prevState.contacts.filter(({id})=> id !== idContact)
      }
    })
  };

  updateContact = idContact=>{
    this.setState(prevState=>{
     return {
       contacts: prevState.contacts.map(contact=>{
         return contact.id === idContact ?
         {...contact, update: !contact.update} : contact
       })
     }
    });

  };


  render(){
    const {contacts,filter} = this.state;
    const visibleContacts = this.getVisibleContacts();

    return(
      <div className = {styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact = {this.addContact}/>

        <h2>Contacts</h2>

        <Filter value={filter} onChangeFilter = {this.changeFilter}/>

        {visibleContacts.length >0 && (
          <ContactList contacts = {visibleContacts} onRemoveContact = {this.removeContact}
          onUpdateContact = {this.updateContact}/>
        )}

      </div>
    )
  }
}

export default App;
