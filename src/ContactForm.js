import React, {Component} from 'react';
import styles from './Form.module.css';

export default class ContactForm extends Component{

  state = {
    name: '',
    number: ''
  }

  handleChange=e=>{
    const {name,value} = e.target;
    this.setState({[name]: value})
  };

  handleSubmit=e=>{
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number)
    this.setState({name: "", number:""});
  };

  render(){
    const {name,number} =this.state;


    return(
    <form onSubmit = {this.handleSubmit} className={styles.form}>

      <label htmlFor="text" className={styles.label}>Name</label><br/>
      <input value={name}
      type="text"
      onChange={this.handleChange}
      id="text"
      name = "name"
      className={styles.input}
      />
      <br/>

      <label htmlFor="number">Number</label><br/>
      <input value={number}
      type="tel"
      onChange={this.handleChange}
      id="number"
      name = "number"
      className={styles.input}

      />
      <br/>

    <button type="submit" className = {styles.formButton}  disabled={!name, !number}>Add contact</button>
  </form>
    )}
}