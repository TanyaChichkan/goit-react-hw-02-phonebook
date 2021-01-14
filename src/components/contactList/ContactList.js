import React from 'react';
import ContactListItem from '../contactListItem/ContactListItem';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';


const ContactList = ({contacts,onRemoveContact,onUpdateContact})=>(
  <ul className = {styles.list}>
  {contacts.map(({id,name,number,update})=>(
    <ContactListItem
    key={id}
    name={name}
    number = {number}
    update= {update}
    onRemove={onRemoveContact}
    onUpdate={onUpdateContact}
    />
  ))}
</ul>
)

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
     id:PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     number: PropTypes.string.isRequired,
     update:PropTypes.bool.isRequired,
  }),).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
  onUpdateContact: PropTypes.func.isRequired
};

export default ContactList;
