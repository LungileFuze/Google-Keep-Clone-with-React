import React, { useState } from "react";
import "./Form.css";
import { uid } from 'uid';

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isActiveForm, setIsActiveForm] = useState(false);

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const textChangeHandler = (event) => {
    setText(event.target.value)
    setIsActiveForm(true)
};

  const submitFormHandler = (event) => {
    event.preventDefault();
    const note = {
      id: uid(),
      title,
      text,
    };
    console.log(note)
    props.addNote(note);
    setTitle("");
    setText("");
    setIsActiveForm(false)
  };

  const formClickHandler = () => {
    setIsActiveForm(true);
  };

  return (
    <div>
      <div className="form-container active-form" onClick={formClickHandler}>
        <form onSubmit={submitFormHandler} className={isActiveForm ? "form" : ""} id="form">
          {isActiveForm && (
            <input
              onChange={titleChangeHandler}
              value={title}
              className="note-title"
              type="text"
              placeholder="Title"
            />
          )}

          <input
            onChange={textChangeHandler}
            value={text}
            className="note-text"
            type="text"
            placeholder="Take a note..."
          />
          {isActiveForm ? (
            <div className="form-actions">
              <div className="icons">
                <div className="tooltip">
                  <i className="material-icons-outlined hover small-icon">
                    add_alert
                  </i>
                  <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tooltip">
                  <i className="material-icons-outlined hover small-icon">
                    person_add_alt
                  </i>
                  <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tooltip">
                  <i className="material-icons-outlined hover small-icon">
                    palette
                  </i>
                  <span className="tooltip-text">Background options</span>
                </div>
                <div className="tooltip">
                  <i className="material-icons-outlined hover small-icon">
                    image
                  </i>
                  <span className="tooltip-text">Background image</span>
                </div>
                <div className="tooltip">
                  <i className="material-icons-outlined hover small-icon">
                    archive
                  </i>
                  <span className="tooltip-text">Archives</span>
                </div>
                <div className="tooltip">
                  <i className="material-icons-outlined hover small-icon">
                    more_vert
                  </i>
                  <span className="tooltip-text">More</span>
                </div>
                <div className="tooltip">
                  <i className="material-icons-outlined hover small-icon">
                    undo
                  </i>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <i className="material-icons-outlined hover small-icon">
                    redo
                  </i>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button type="close" className="close-btn">Close</button>
            </div>
            ) : (
            <div className="form-actions">
              <div className="tooltip">
                <i className="material-icons-outlined hover">check_box</i>
                <span className="tooltip-text">New list</span>
              </div>
              <div className="tooltip">
                <i className="material-icons-outlined hover">brush</i>
                <span className="tooltip-text">New note with drawing</span>
              </div>
              <div className="tooltip">
                <i className="material-icons-outlined hover">image</i>
                <span className="tooltip-text">New note with image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;


  /* <div
className="form-container inactive-form"
onClick={formClickHandler}
>
<form action="">
  <input
    className="note-text"
    type="text"
    placeholder="Take a note..."
  />
  <div className="form-actions">
    <div className="tooltip">
      <i className="material-icons-outlined hover">check_box</i>
      <span className="tooltip-text">New list</span>
    </div>
    <div className="tooltip">
      <i className="material-icons-outlined hover">brush</i>
      <span className="tooltip-text">New note with drawing</span>
    </div>
    <div className="tooltip">
      <i className="material-icons-outlined hover">image</i>
      <span className="tooltip-text">New note with image</span>
    </div>
  </div>
</form>
</div> */

