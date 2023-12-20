import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteNoteComponent = () => {
  const { id } = useParams();
  const [note, setNote] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/notes/`);
        console.log(response.data)
        setNote(response.data);
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };

    fetchNote();
  }, [id]);

  const handleDeleteNote = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/notes/${note.id}/`);
      // Navigate to the list view after deleting the note
      navigate('/list'); // Adjust the path accordingly
    } catch (error) {
      console.error('Error deleting note:', error);
      // Optionally, you can display an error message to the user
    }
  };

  return (
    <div>
      <h2>Delete Note</h2>
      {note && (
        <div>
          <p>Are you sure you want to delete the note with title: {note.id}?</p>
          <button onClick={handleDeleteNote}>Delete Note</button>
        </div>
      )}
    </div>
  );
};

export default DeleteNoteComponent;
