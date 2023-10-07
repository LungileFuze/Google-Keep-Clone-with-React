import React, { useState } from "react";
import "./Modal.css"
import Form from "../Form/Form";

const Modal = (props) => {
    const {isModalOpen, selectedNote, toggleModal} = props;
    
    const [hasCursor, setHasCursor] = useState(false)

    const handleCloseModal = () => !hasCursor && toggleModal();
    const handleOnMouseOverNote = () => setHasCursor(true);
    const handleOnMouseOutNote = () => setHasCursor(false);

    return (
        <div className={`modal ${isModalOpen ? "open-modal" : ""}`} onClick={handleCloseModal}>
        <div className="modal-content" onMouseOver={handleOnMouseOverNote} onMouseOut={handleOnMouseOutNote} >
            <Form selectedNote={selectedNote} toggleModal={toggleModal} edit/>
        </div>
    </div>
    )
}

export default Modal