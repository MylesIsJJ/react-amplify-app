
 import React from 'react';
import logo from './logo.svg';
import './App.css';import './App.css'

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Dashboard/>
       <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);


// this is as comment ********* All code above builds 
// //import OptionBox from './OptionBox';
//import SearchBar from "./SearchBar";
//import Amplify from '@aws-amplify';  
//import awsconfig from './aws-exports';
 //Amplify.awsconfig(awsconfig)
/*function App() 
{
  return (
    <div className="App">
      <SearchBar />
      <div class='name'><h2> Welcome to the skyliners, where all your needs can be met</h2></div>
      <OptionBox OBtitle='Food' OBcaption='Select from our many food options' />
      <OptionBox OBtitle='Entertainment' OBcaption='See our live performances' />
      <OptionBox OBtitle='Exercize' OBcaption='See our options for physical fitness' />
      <OptionBox OBtitle='Beauty' OBcaption='See our health and beauty suppliers' />
    </div>
  );
}
*/ 
/* <OptionBox OBtitle='Food' OBcaption='Select from our many food options' />
      <OptionBox OBtitle='Entertainment' OBcaption='See our live performances' />
      <OptionBox OBtitle='Exercize' OBcaption='See our options for physical fitness' />
      <OptionBox OBtitle='Beauty' OBcaption='See our health and beauty suppliers' /> */
      
// import { withAuthenticator } from '@aws-amplify/ui-react'








    
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { API } from 'aws-amplify';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import { UpdateComment } from './graphql/queries';
// //import { createTodo as createNoteMutation, deleteTodo as deleteNoteMutation } from './graphql/mutations';
// import { createComment as createNoteMutation, deleteComment as deleteNoteMutation } from './graphql/mutations';
// const initialFormState = { name: '', description: '' }

// function App() {
//   const [notes, setNotes] = useState([]);
//   const [formData, setFormData] = useState(initialFormState);

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   async function fetchNotes() {
//     const apiData = await API.graphql({ query: listPost });
//     setNotes(apiData.data.UpdateComment.items);
//   }

//   async function createNote() {
//     if (!formData.name || !formData.description) return;
//     await API.graphql({ query: createNoteMutation, variables: { input: formData } });
//     setNotes([ ...notes, formData ]);
//     setFormData(initialFormState);
//   }

//   async function deleteNote({ id }) {
//     const newNotesArray = notes.filter(note => note.id !== id);
//     setNotes(newNotesArray);
//     await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
//   }

//   return (
//     <div className="App">
//       <h1>My Notes App</h1>
//       <input
//         onChange={e => setFormData({ ...formData, 'name': e.target.value})}
//         placeholder="Note name"
//         value={formData.name}
//       />
//       <input
//         onChange={e => setFormData({ ...formData, 'description': e.target.value})}
//         placeholder="Note description"
//         value={formData.description}
//       />
//       <button onClick={createNote}>Create Note</button>
//       <div style={{marginBottom: 30}}>
//         {
//           notes.map(note => (
//             <div key={note.id || note.name}>
//               <h2>{note.name}</h2>
//               <p>{note.description}</p>
//               <button onClick={() => deleteNote(note)}>Delete note</button>
//             </div>
//           ))
//         }
//       </div>
//       <AmplifySignOut />
//     </div>
//   );
// }

// export default withAuthenticator(App); */