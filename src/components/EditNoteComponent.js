import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditNoteComponent = () => {
  const { id } = useParams();
  const [note, setNote] = useState({});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/notes/${id}/`);
        const fetchedNote = response.data;
        setNote(fetchedNote);
        setTitle(fetchedNote.title);
        setContent(fetchedNote.content);
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };

    fetchNote();
  }, [id]);

  const handleEditNote = async () => {
    try {
      await axios.put(`http://localhost:8000/api/notes/${note.id}/`, { title, content });
      // Optionally, you can navigate to the list view after editing the note
    } catch (error) {
      console.error('Error editing note:', error);
    }
  };

  return (
    <div>
      <h2>Edit Note</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <label>Content:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <br />
      <button onClick={handleEditNote}>Save Changes</button>
    </div>
  );
};

export default EditNoteComponent;
