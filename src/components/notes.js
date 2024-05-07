import { useState } from "react";
import NotesList from "./notesList";
import { useDispatch } from "react-redux";
import { addNotes } from "../utils/notesSlice";
import { onSearch } from "../utils/notesSlice";

const NotesComponent = () => {
  const dispatch = useDispatch();

  const [noteValue, setNoteValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const addNote = () => {
    dispatch(addNotes(noteValue));
    setNoteValue("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={event => setNoteValue(event.target.value)}
        value={noteValue}></input>
      <button onClick={() => addNote()}> Add Note</button>
      <div>
        <input
          type="text"
          onChange={event => setSearchValue(event.target.value)}></input>
        <button onClick={() => dispatch(onSearch(searchValue))}>Search</button>
      </div>
      <NotesList></NotesList>
    </div>
  );
};

export default NotesComponent;
