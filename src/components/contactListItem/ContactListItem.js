import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = function({id,name,number,onRemove,update,onUpdate}){

  let updatedClass = update ? styles.updated : styles['not-updated'];
  let textUpdatedClass = update ? styles['text-updated'] : styles['text-not-updated'];
  let buttonUpdatedClass= update ? styles['button-updated'] : styles['button-not-updated'];

  return (
    <li key={id} className = {updatedClass}>
      <span className = {textUpdatedClass}>{name}: {number}</span>

      <div className = {styles.wrapper}>
        <label id="delete" className = {styles.itemLabel}>update</label>
        <input type="checkbox"
        id = "delete"
        checked = {update}
        onChange = {onUpdate}
        className = {styles.inputItem}
        data-name={name}/>

        <button type="button" onClick={onRemove} data-type={name} className={buttonUpdatedClass}>Delete</button>
      </div>
    </li>
  )
}

ContactListItem.propTypes = {
     id:PropTypes.string,
     name: PropTypes.string.isRequired,
     number: PropTypes.string.isRequired,
     update:PropTypes.bool.isRequired,
     onRemove:PropTypes.func.isRequired,
     onUpdate: PropTypes.func.isRequired
};

export default ContactListItem;