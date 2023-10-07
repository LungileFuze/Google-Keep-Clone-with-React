import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar"
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

const NOTES = [
  // {
  //   id: "123",
  //   title: "some title1",
  //   text: "some text1"
  // },
  // {
  //   id: "1234",
  //   title: "some title2",
  //   text: "some text2"
  // }
]

function App() {

  const [notes, setNotes] = useState(NOTES)

  
  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note]
    })
  }

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) =>id !== note.id)
    })
 }

//  function handleDeleteTask(taskId) {
//   setTasks(tasks.filter((t) => t.id !== taskId));
// }

  return (
    <div>
       <Navbar/>
       <Sidebar/>
       <Form addNote={addNote} />
       <Notes notes={notes} deleteNote={deleteNote}/>
       <Modal/>
    </div>
  );
}

export default App;
