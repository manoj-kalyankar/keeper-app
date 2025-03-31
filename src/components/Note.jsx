import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note-container">
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Fab
          onClick={handleClick}
          sx={{
            bgcolor: "#202124",
            boxShadow: "none",
            "&:hover": { bgcolor: "#f1f3f43d" },
          }}
        >
          <DeleteIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Note;
