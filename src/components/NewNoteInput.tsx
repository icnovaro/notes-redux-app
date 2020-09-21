import React, { ChangeEvent } from 'react'

interface NewNoteInputProps{
    addNote(note:string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({addNote}) => {
    
    // Set the state of the input note value
    const[note, setNote] =  React.useState("")

    // Set the note function handler
    const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }
    
    const onAddNoteClick = () => {
        addNote(note);
        setNote("");
    }
  
    return (
        <div>
            <input onChange={updateNote} value={note} type="next" name="note" placeholder="Note"/>
            <button onClick={onAddNoteClick}>Add note</button>
        </div>
    )
}
