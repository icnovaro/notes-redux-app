import React from 'react'
import './App.css'

import {NewNoteInput} from  './components/NewNoteInput'

function App() {
  return (
    <>
      <NewNoteInput addNote={alert}/>
      <ul>
        <li>Some note</li>
      </ul>
    </>
  );
}

export default App;
