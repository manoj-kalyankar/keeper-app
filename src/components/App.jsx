import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    return localValue == null ? [] : JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    newNote.id = crypto.randomUUID();
    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== id;
      });
    });
  }

  return (
    <div className="app">
      <Header />
      <div className="content">
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem) => {
          return (
            <Note
              key={noteItem.id}
              id={noteItem.id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
