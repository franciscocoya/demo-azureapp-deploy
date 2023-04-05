import { useState } from 'react';
import './App.css';

function App() {
    const [notes, setNotes] = useState([]);
    const [text, setText] = useState('');
  
    const addNote = () => {
      if (text !== '') {
        setNotes([...notes, text]);
        setText('');
      }
    };
  
    const deleteNote = (index) => {
      const newNotes = [...notes];
      newNotes.splice(index, 1);
      setNotes(newNotes);
    };
  
    return (
      <div className="app">
        <h1>Aplicación de notas</h1>
        <div className='app-note-input'>
          <label htmlFor="nota">Nota</label>
          <input type="text" id="nota" value={text} placeholder='Introduce una nota' onChange={(e) => setText(e.target.value)} />
        </div>
        <button onClick={addNote}>Añadir nota</button>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              {note}
              <button onClick={() => deleteNote(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
        {notes.length == 0 && <p>No hay notas</p>}
      </div>
    );
  }

export default App
