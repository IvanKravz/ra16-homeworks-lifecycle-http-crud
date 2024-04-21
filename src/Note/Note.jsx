export const Note = ({ id, text, removeNote }) => {
  return (
    <div className='card'> 
        <p className='card-text'>{text}</p>
        <a href='#' className='btn btn-primary' onClick={() => removeNote(id)}>Удалить</a>
    </div> 
  )
}
