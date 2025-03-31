import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    id: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      id: "",
    });
    event.preventDefault();
  }

  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <TextareaAutosize
            className="title-field"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            minRows={isExpanded ? 2 : 1}
          />
        )}
        <TextareaAutosize
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          minRows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={submitNote}
            sx={{
              "&:hover": { bgcolor: "#202124" },
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
