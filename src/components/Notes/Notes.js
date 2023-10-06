import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
  console.log("props", props.notes[0]);
  const { notes } = props;
  return (
    <div className="notes">
        {/* Conditional outputting */}
      {notes.length === 0 ? (
        <p>Notes you add appear here.</p>
      ) : (
        notes.map((note, index) => (
          <Note key={index} id={note.id} title={note.title} text={note.text} />
        ))
      )}
    </div>
  );
};

export default Notes;
