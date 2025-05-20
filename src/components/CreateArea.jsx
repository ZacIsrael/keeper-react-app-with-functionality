import React, { useState } from "react";

function CreateArea(props) {
  // note keeps track of what the user is typing
  // its default state is an object with 2 properties: title & content
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

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

  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={handleChangedNote}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={handleChangedNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
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
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
