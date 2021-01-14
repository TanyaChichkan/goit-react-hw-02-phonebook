import React, {Component} from 'react';
import ReactDOM from 'react';
import ContactsTracker from './components/contactsTracker/ContactsTracker';
import ContactsTrackerHooks from './components/contactsTracker/ContactsTrackHook';


const App =()=>{

    return(
      <div className = "container">
        <h1>Phonebook</h1>
        {/* <ContactsTracker/> */}
        <ContactsTrackerHooks/>
      </div>
    )

}

export default App;
