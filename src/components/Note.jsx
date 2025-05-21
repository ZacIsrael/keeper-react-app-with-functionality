import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1 style={{ fontWeight: "bold" }}>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={async () => {
          // This anonymous function ensures that the following code gets executed only 
          // once the "Delete" button has been clicked; not when the Note has been rendered.
          await props.onDeleted(props.id);
        }} 
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
