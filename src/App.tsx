import React from 'react'
import './App.css'

import {NewNoteInput} from  './components/NewNoteInput'
import {useSelector, useDispatch} from 'react-redux'
import {NotesState} from './store/reducers/noteReducer'

import {addNote} from './store/actions'

function App() {

  // Allows you to extract data from the Redux store state.
  const notes = useSelector<NotesState, NotesState['notes']>((state) => state.notes) 
  const dispatch = useDispatch()

  const onAddNote = (note:string) => { 
     dispatch(addNote(note))
  }

  return (
    <>
      <NewNoteInput addNote={onAddNote}/>
      <ul>
        {notes.map((note) =>{
            return <li key={note}>{note}</li>
          })}
      </ul>
    </>
  );
}

export default App;
