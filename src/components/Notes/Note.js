import React, { useState } from "react";

const Note = (props) => {
  const [title, setTitle] = useState(props.title);
  const [text, setText] = useState(props.text);
  const [isHover, setIsHover] = useState(false);

  const noteClickHandler = () => {
    setTitle("changed Title");
    setText("change Text");
  };

  const hoverOverHandler = () => {
    setIsHover(true)
  };
  const hoverOutHandler = () => {
    setIsHover(false)
  };

  //Mouseover using inline style css
  // style={{ visibility: isHover? "visible" : "hidden"}}

  return (
    <div
      className="note"
      id="note.id"
      onClick={noteClickHandler}
      onMouseOver={hoverOverHandler}
      onMouseOut={hoverOutHandler}
    >
      {isHover && (
        <span className="material-icons check-circle">check_circle</span>
      )}

      <div className="title">{title}</div>
      <div className="text">{text}</div>

      {isHover && (
        <div className="note-footer" 
        style={{ visibility: isHover? "visible" : "hidden"}}>
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
            <i className="material-icons-outlined hover small-icon">palette</i>
            <span className="tooltip-text">Background options</span>
          </div>
          <div className="tooltip">
            <i className="material-icons-outlined hover small-icon">image</i>
            <span className="tooltip-text">Background image</span>
          </div>
          <div className="tooltip">
            <i className="material-icons-outlined hover small-icon">archive</i>
            <span className="tooltip-text">Archives</span>
          </div>
          <div className="tooltip">
            <i className="material-icons-outlined hover small-icon">
              more_vert
            </i>
            <span className="tooltip-text">More</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
