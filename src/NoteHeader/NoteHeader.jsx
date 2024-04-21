import './NoteHeader.css'

export const NoteHeader = ({ requestNotes }) => {
    return (
        <header className='note_header'>
            <div className='title_note'>Notes</div>
            <button 
                className='note_update_btn'   
                onClick={requestNotes}
                >&#8635; 
            </button>
        </header>
  )
}