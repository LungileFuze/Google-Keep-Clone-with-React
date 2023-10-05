import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar"
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

function App() {

  const notes = [
    {
      id: "123",
      title: "some title1",
      text: "some text1"
    },
    {
      id: "1234",
      title: "some title2",
      text: "some text2"
    },
    {
      id: "12345",
      title: "some title3",
      text: "some text3"
    },
  ]

  return (
    <div>
       <Navbar/>
       <Sidebar/>
       <Form/>
       <Notes notes={notes}/>
       <Modal/>
    </div>
  );
}

export default App;
