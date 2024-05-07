import { useDispatch, useSelector } from "react-redux";
import { deleteNote} from "../utils/notesSlice"
const NotesList = () => {
  
  const dispatch = useDispatch();
  const notesList = useSelector((store) => store.note.notes)
    if (notesList.length === 0) {
        return (<div>No notes are added yet</div>)
    }
  return (
      <div>
      <div> Below are the notes List : </div>
      {notesList.map((note, index) => (
        <h1 key={index}>
          {note} <button onClick={() => dispatch(deleteNote(index))}>Delete</button>
        </h1>
      ))}
    </div>
  );
};

export default NotesList;
