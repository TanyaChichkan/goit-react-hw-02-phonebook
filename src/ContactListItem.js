import React from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

const ContactListItem = function({id,name,number,onRemove,update,onUpdate}){

  let updatedClass = update ? styles.updated : styles['not-updated'];

  return (
    <li key={id} className = {updatedClass}>
      <span className = {styles.text}>{name}: {number}</span>

      <div className = {styles.wrapper}>
        <label id="delete" className = {styles.itemLabel}>update</label>
        <input type="checkbox"
        id = "delete"
        checked = {update}
        onChange = {onUpdate}
        className = {styles.inputItem}/>

        <button type="button" onClick={onRemove}>Delete</button>
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