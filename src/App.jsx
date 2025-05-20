import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";

// CHALLENGE:
// 1. Implement the add note functionality.
// - Create a constant that keeps track of the title and content.
// - Pass the new note back to the App.
// - Add new note to an array.
// - Take array and render seperate Note components for each item.

// 2. Implement the delete note functionality.
// - Callback from the Note component to trigger a delete function.
// - Use the filter function to filter out the item that needs deletion.
// - Pass a id over to the Note component, pass it back to the App when deleting.

// This is the end result you're aiming for:
// https://pogqj.csb.app/

function App() {
  // How to create a React app: npm create vite@latest {app-name} -- --template react

  // notes is the array that keeps track of all the notes.
  // Its initial state is an empty array
  const [notes, setNotes] = useState([]);

  // this function get triggered when the "add" button has been clicked
  function onClickAdd(noteToAdd){
    // add animation when the 'add' button has been clicked
    let addBtn = event.target;

    // make the background color of the button green once it has been clicked
    addBtn.style.backgroundColor = "green";

    // turn the background color of the button back to this shade (#f5ba13) of yellow after 0.05 seconds
    setTimeout(() => {
      addBtn.style.backgroundColor = "#f5ba13";
    }, 50);

    // only add a note to the list if the user actually typed a title and some content (No empty strings for the title or the content fields)
    if(noteToAdd.title.trim().length > 0 && noteToAdd.content.trim().length > 0){
      // add the current note to the notes array
      setNotes((prevNotes) => [...prevNotes, noteToAdd]);

      
    }

    event.preventDefault();

  }

  // this function gets triggered when the "delete" icon inside of a note has been clicked
  function deleteNote(noteId){
    console.log(`Note with id = ${noteId} will be deleted.`);
    // call setNotes and delete the note with id = noteId from the notes array
    setNotes((prevNotes) => {
      return prevNotes.filter((note, i) => {
        // debugging purposes 
        console.log("prevNotes.filter(note, i): note = ", note);
         // return a new array that has all of the notes from the previous array EXCEPT for the one where its index = noteId
        return i !== noteId;
      });
    });

  }
  return (
    <>
      <div>
        <Header />
        <CreateArea onAdd={onClickAdd}/>
        {/* populate an unordered list with the notes from the notes array */}
        {notes.map((note, i) => (
          <Note key={i} id={i} title={note.title} content={note.content} onDeleted={deleteNote}/>
        ))}
        {/* <Note key={1} title="Note title" content="/Note content" /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
