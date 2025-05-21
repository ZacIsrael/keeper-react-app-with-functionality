import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  // note keeps track of what the user is typing
  // its default state is an object with 2 properties: title & content
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // determines whether or not this component (CreateArea) is expanded or not
  const [isExpanded, setExpanded] = useState(false);

  // executes when a change is made to the "title" input or the "content" textarea
  function handleChangedNote(event) {
    // target will either input (title) or textarea (content)
    let { target } = event;

    // value is what the user typed
    // name is either "title" (input) or "content" (textarea)
    let { name, value } = target;

    console.log(
      "handleChangedNote(): target = ",
      target,
      "value = ",
      value,
      "name = ",
      name
    );

    // Save the new value from the title and content fields into state,
    // so React can keep track of what's currently being typed in the box

    if (name === "title") {
      // only update the title, leave the content as is
      setNote((prevNote) => ({
        ...prevNote,
        title: value,
      }));
    } else if (name === "content") {
      // only update the content, leave the title as is
      setNote((prevNote) => ({
        ...prevNote,
        content: value,
      }));
    }
  }

  // triggered when the user clicks the textarea html element
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {/* only show this input html element if isExpanded = true. 
        It'll be set to true once the user clicks the textarea html element.
        (See the expand() function.)  */}
        {isExpanded && (
          <input
            value={note.title}
            onChange={handleChangedNote}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          value={note.content}
          // only expand the text area to 3 rows once it has been clicked
          onClick={expand}
          onChange={handleChangedNote}
          name="content"
          placeholder="Take a note..."
          // If isExpanded = true, make this textarea html element 3 rows long.
          // Otherwise, only make it 1 row long.
          rows={isExpanded ? 3 : 1}
        />
        {/* Zoom is a transition component from MUI that animates its child by scaling it in or out. */}
        <Zoom in={isExpanded}>
          {/* Fab component allows the button to be a different color when the user hovers over it */}
          <Fab
            onClick={async () => {
              // This anonymous function ensures that the following function
              // only gets called once the "Add" button has been clicked; not when it is rendered.

              // adds the note (handled in app.js)
              await props.onAdd(note);

              // Clear out the title input and content textarea once the note has been added (to the notes array in app.js)
              setNote({
                title: "",
                content: "",
              });
            }}
          >
            {/* displays a '+' */}
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
