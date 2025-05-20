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

  return (
    <>
      <div>
        <Header />
        <CreateArea />
        <Note key={1} title="Note title" content="Note content" />
        <Footer />
      </div>
    </>
  );
}

export default App;
