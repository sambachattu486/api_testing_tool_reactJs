// CreateNoteComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./create.css"

const CreateNoteComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const handleCreateNote = async () => {
    try {
      await axios.post('http://localhost:8000/api/notes/', { title, content });
      // Optionally, you can navigate to the list view after creating the note
      navigate('/list')
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div>
      <h2>Create Note</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <label>Content:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <br />
      <button onClick={handleCreateNote}>Create Note</button>
    </div>
  );
};

export default CreateNoteComponent;
