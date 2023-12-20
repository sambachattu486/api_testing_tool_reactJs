// ListNotesComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './list.css';

const ListNotesComponent = () => {
  const [notes, setNotes] = useState([]);
  const [loading,setLoading] = useState(true)
  const [error,setError]=useState(null)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/notes/');
        setNotes(response.data);
      } catch (error) {
        setError(true)
        console.error('Error fetching notes:', error);
      }finally{
        setLoading(false)
      }
    };

    fetchNotes();
  }, []);

  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/notes/${id}/`);
      // After deleting, fetch the updated list of notes
      const response = await axios.get('http://localhost:8000/api/notes/');
      setNotes(response.data);
    } catch (error) {
      setError(true)
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div>
      <h2>Notes List</h2>
      <ul>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {notes.map((note) => (
          <div className='listItemClass' key={note.id}>
            <li>
              <b>{note.title}</b>      
              <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </li>
            <p>{note.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListNotesComponent;
