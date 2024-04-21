import './App.css'
import { Component } from 'react'
import { NoteHeader } from './NoteHeader/NoteHeader'
import NoteFormAdd from './NoteFormAdd/NoteFormAdd'
import { Note } from './Note/Note'
import { nanoid } from 'nanoid';

const urlServer = 'http://localhost:7070/notes'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { notes: [], }

    this.requestNotes = this.requestNotes.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  addNote = async ({ text }) => {
    const response = await fetch(urlServer, {
      method: 'POST',
      body: JSON.stringify({ text })
    });

    if(!response) return

    this.setState((prevState) => ({
      notes: [...prevState.notes, { id: nanoid(), text }],
    }));
  }

  requestNotes = async () => {
    const response = await fetch(urlServer);
    const notes = await response.json();
    this.setState((prevState) => ({ ...prevState, notes }));
  }

  removeNote = async (id) => {
    const response = await fetch(`${urlServer}/${id}`, {
      method: 'DELETE',
    });

    if(!response) return

    this.requestNotes();
  }
  
  render() {
    return (
      <div className='crud'>
        <div>
          <NoteHeader requestNotes={this.requestNotes}/>
          <NoteFormAdd addNote={this.addNote}/>
          <div className='notes'>
            {this.state.notes.map((note) => (
              <Note 
                key={note.id} 
                id={note.id}
                text={note.text}
                removeNote={this.removeNote}
                />
            ))}
          </div>
        </div>

      </div>
    )
  }
}
