import { Component } from 'react'
import './NoteFormAdd.css'

export default class NoteFormAdd extends Component {
    content = { text: '', }
    state = this.content;
  
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.text.length === 0) return
        this.props.addNote(this.state);
        this.setState(this.content) 
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
    return (
      <form className='note_form_add' onSubmit={this.handleSubmit}>
        <header>
            <h5 className='title_header'>New note</h5>
        </header>
        <textarea
            className='text_note_form'
            name='text'
            value={this.state.text}
            onChange={this.handleChange}
            required
        >
        </textarea>
        <div className="button_add">
          <button>Добавить</button>
        </div>
      </form>
    )
  }
}
